import { Request, Response } from 'express';
import { IUser } from '../interfaces/userInterface';
import userService from '../services/userService';

const newUser = async (req: Request, res: Response) => {
  const data:IUser = req.body;
  await userService.creatingUser(data);

  res.status(201)
    .json(
      {
        token: 'eyJhbGciOiJIUz.eyJzdWIiOiIxMjM0NwIiwibmFtZSI6IkpvaG4gR.SflKxwRJSMeKKF2QT4fwpMeJf3',
      },
    );
};

export default { newUser };