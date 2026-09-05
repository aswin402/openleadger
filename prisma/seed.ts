import { PrismaClient } from '../lib/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import bcrypt from 'bcryptjs';

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("DATABASE_URL is required to seed the database.");
  process.exit(1);
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // Clean the database
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  // Create Users
  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword = await bcrypt.hash('user123', 10);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@onpkg.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  const user1 = await prisma.user.create({
    data: {
      email: 'user1@onpkg.com',
      name: 'Aswin Dev',
      password: userPassword,
      role: 'USER',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@onpkg.com',
      name: 'Jane Smith',
      password: userPassword,
      role: 'USER',
    },
  });

  // Create Posts
  await prisma.post.createMany({
    data: [
      {
        title: 'Getting Started with Next.js 16 and Prisma 7',
        content: 'Next.js 16 and Prisma 7 provide an incredibly powerful combo for full-stack React applications. By combining Next.js Server Actions with Prisma driver adapters, you can build blazing fast, edge-ready applications.',
        published: true,
        authorId: user1.id,
        views: 120,
      },
      {
        title: 'Building Beautiful Interfaces with Tailwind CSS v4',
        content: 'Tailwind CSS v4 introduces a streamlined engine, CSS-first configuration, and native cascading layers. It makes managing design systems a breeze without the bloat of traditional CSS setups.',
        published: true,
        authorId: user1.id,
        views: 340,
      },
      {
        title: 'The Future of State Management with Zustand',
        content: 'Zustand is a small, fast, and scalable bear-bones state-management solution. It has a comfy API based on hooks, is not opinionated, and doesn\'t wrap your app in providers.',
        published: true,
        authorId: user2.id,
        views: 95,
      },
      {
        title: 'Draft post',
        content: 'This is a draft post that is not published yet.',
        published: false,
        authorId: admin.id,
      },
    ],
  });

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await pool.end();
  });
