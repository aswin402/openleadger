import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { CreatePostSchema } from '@/types/schema';
import { verifyToken } from '@/lib/jwt';
import { logger } from '@/lib/logger';
import { withLogging } from '@/lib/api-logger';

async function getHandler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    
    const posts = await prisma.post.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, data: posts });
  } catch (error: any) {
    logger.error('Error fetching posts in API:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

async function postHandler(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');
    let userId: string | null = null;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const payload = verifyToken(token);
      if (payload) {
        userId = payload.userId;
      }
    }
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = CreatePostSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { success: false, errors: validatedData.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title: validatedData.data.title,
        content: validatedData.data.content,
        published: validatedData.data.published,
        authorId: userId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error: any) {
    logger.error('Error creating post in API:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export const GET = withLogging(getHandler);
export const POST = withLogging(postHandler);
