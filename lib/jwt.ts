import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-change-me';

interface TokenPayload {
  userId: string;
  email: string;
  role: string;
}

export function signToken(payload: TokenPayload, expiresIn: import('jsonwebtoken').SignOptions['expiresIn'] = '7d'): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
}
