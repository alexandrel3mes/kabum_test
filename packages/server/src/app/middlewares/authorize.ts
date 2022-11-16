import 'dotenv';
import { Request, Response, NextFunction } from 'express';
import authConfig from '../config/auth';
import jwt from 'jsonwebtoken';
import throwCustomError from '../../utils/throwCustomError';

const secret = 'seusecretdetoken';

export interface TokenPayload {
  userId: string;
  userEmail: string;
}

const authorize = {
  auth(
    req: Request,
    _: Response,
    next: NextFunction,
  ): void {
    const authToken = req.headers.authorization;
    if (!authToken) {
      return throwCustomError('unauthorizedError', 'Token not found');
    }

    const [, token] = authToken.split(' ');

    if (!token) {
      return throwCustomError('unauthorizedError', 'Bad format token');
    }

    try {
      const data: string | jwt.JwtPayload = jwt.verify(token, authConfig.secret);
      const { userId } = data as TokenPayload;
  
      req.userId = userId;
  
      return next();
    } catch (e) {
      return throwCustomError('unauthorizedError', 'Token must be a valid token');
    }
  },
};

export default authorize;
