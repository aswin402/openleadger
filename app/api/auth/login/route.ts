import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { LoginFormSchema } from '@/types/schema';
import { comparePassword } from '@/lib/auth-utils';
import { signToken } from '@/lib/jwt';
import { logger } from '@/lib/logger';
import { withLogging } from '@/lib/api-logger';

async function loginHandler(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = LoginFormSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { success: false, errors: validatedData.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, password } = validatedData.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const isValidPassword = await comparePassword(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const responseUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    const response = NextResponse.json(
      { success: true, data: responseUser, token },
      { status: 200 }
    );

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return response;
  } catch (error: unknown) {
    logger.error('Login Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export const POST = withLogging(loginHandler);
