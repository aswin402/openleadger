import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { logger } from '@/lib/logger';
import { withLogging } from '@/lib/api-logger';

async function seedHandler() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      { success: false, error: 'Seeding API disabled in production' },
      { status: 403 }
    );
  }

  try {
    logger.info('Database seeding requested via API...');

    await prisma.post.deleteMany();
    await prisma.user.deleteMany();

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

    await prisma.post.createMany({
      data: [
        {
          title: 'Getting Started with Next.js 16 and Prisma 7',
          content: 'Next.js 16 and Prisma 7 provide an incredibly powerful combo for full-stack React applications. By combining Next.js Server Actions with Prisma driver adapters, you can build blazing fast, edge-ready applications.',
          published: true,
          authorId: user1.id,
          views: 125,
        },
        {
          title: 'Building Beautiful Interfaces with Tailwind CSS v4',
          content: 'Tailwind CSS v4 introduces a streamlined engine, CSS-first configuration, and native cascading layers. It makes managing design systems a breeze without the bloat of traditional CSS setups.',
          published: true,
          authorId: user1.id,
          views: 348,
        },
        {
          title: 'The Future of State Management with Zustand',
          content: 'Zustand is a small, fast, and scalable bear-bones state-management solution. It has a comfy API based on hooks, is not opinionated, and doesn\'t wrap your app in providers.',
          published: true,
          authorId: user2.id,
          views: 99,
        },
        {
          title: 'Next.js 16 Asynchronous Route Parameters',
          content: 'In Next.js 16, page and route parameters (params) are now resolved as Promises. You must await params before reading their values to ensure compatibility and runtime speed.',
          published: true,
          authorId: admin.id,
          views: 42,
        },
      ],
    });

    logger.info('Database seeded successfully via API!');
    return NextResponse.json({ success: true, message: 'Database seeded successfully' });
  } catch (error: unknown) {
    logger.error('Error seeding database via API:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to seed database';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

export const POST = withLogging(seedHandler);
