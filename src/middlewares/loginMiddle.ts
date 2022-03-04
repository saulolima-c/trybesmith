import { Request, Response, NextFunction } from 'express';
import StatusCodes from '../enums/statusCodes';
import { IUser } from '../interfaces/userInterface';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: IUser = req.body;
  if (!username) {
    return res.status(StatusCodes.BadRequest)
      .json({
        error: 'Username is required',
      });
  }

  if (!password) {
    return res.status(StatusCodes.BadRequest)
      .json({
        error: 'Password is required',
      });
  }
  next();
};

export default {
  validateLogin,
};