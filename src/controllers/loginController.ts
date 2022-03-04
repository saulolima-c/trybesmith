import { Request, Response } from 'express';
import getToken from '../auth/createToken';
import { IdUser } from '../interfaces/userInterface';
import StatusCodes from '../enums/statusCodes';
import loginService from '../services/userService';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const usr: IdUser = await loginService.executeLogin(username, password);
  if (usr.message) {
    return res.status(StatusCodes.Unauthorized).json({ error: usr.message });
  }

  const token = await getToken.generateToken(username, password);
  return res.status(StatusCodes.OK).json({ token });
};

export default {
  login,
};