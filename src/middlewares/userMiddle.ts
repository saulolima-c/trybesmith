import { Request, Response, NextFunction } from 'express';
import StatusCodes from '../enums/statusCodes';
import { IUser } from '../interfaces/userInterface';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username }: IUser = req.body;
  if (!username) {
    return res.status(StatusCodes.BadRequest)
      .json({ error: 'Username is required' });
  }

  if (typeof username !== 'string') {
    return res.status(StatusCodes.UnprocessableEntity)
      .json({ error: 'Username must be a string' });
  }

  if (username.length <= 2) {
    return res.status(StatusCodes.UnprocessableEntity)
      .json({ error: 'Username must be longer than 2 characters' });
  }
  next();
};

const validateClass = (req: Request, res: Response, next: NextFunction) => {
  const { classe }: IUser = req.body;
  if (!classe) {
    return res.status(StatusCodes.BadRequest)
      .json({ error: 'Classe is required' });
  }
  
  if (typeof classe !== 'string') {
    return res.status(StatusCodes.UnprocessableEntity)
      .json({ error: 'Classe must be a string' });
  }
  
  if (classe.length <= 2) {
    return res.status(StatusCodes.UnprocessableEntity)
      .json({ error: 'Classe must be longer than 2 characters' });
  }
  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level }: IUser = req.body;
  if (level <= 0) {
    return res.status(StatusCodes.UnprocessableEntity)
      .json({ error: 'Level must be greater than 0' });
  }

  if (!level) {
    return res.status(StatusCodes.BadRequest)
      .json({ error: 'Level is required' });
  }
    
  if (typeof level !== 'number') {
    return res.status(StatusCodes.UnprocessableEntity)
      .json({ error: 'Level must be a number' });
  }
  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password }: IUser = req.body;
  if (!password) {
    return res.status(StatusCodes.BadRequest)
      .json({ error: 'Password is required' });
  }
    
  if (typeof password !== 'string') {
    return res.status(StatusCodes.UnprocessableEntity)
      .json({ error: 'Password must be a string' });
  }
    
  if (password.length <= 7) {
    return res.status(StatusCodes.UnprocessableEntity)
      .json({ error: 'Password must be longer than 7 characters' });
  }
  next();
};

export default {
  validateUsername,
  validateClass,
  validateLevel,
  validatePassword,
};