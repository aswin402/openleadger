import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/jwt';
import { logger } from '@/lib/logger';
import { withLogging } from '@/lib/api-logger';

async function getHandler(request: NextRequest) {
  try {
    let token = request.cookies.get('token')?.value;

    if (!token) {
      const authHeader = request.headers.get('Authorization');
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
      }
    }

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized or expired token' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: user });
  } catch (error: any) {
    logger.error('Auth check error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

async function postHandler() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });
  return response;
}

export const GET = withLogging(getHandler);
export const POST = withLogging(postHandler);
