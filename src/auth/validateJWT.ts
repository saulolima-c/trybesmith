import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import StatusCodes from '../enums/statusCodes';

const SECRET = 'vou te contar um segredo';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token || token === '') {
      return res.status(StatusCodes.Unauthorized).json({ error: 'Token not found' });
    }
    const pyd = jwt.verify(token, SECRET) as { id:number };
    req.body.id = pyd.id;
    return next();
  } catch (error) {
    if (error) {
      return res.status(StatusCodes.Unauthorized).json({ error: 'Invalid token' });
    }
  }
};

export default validateToken;