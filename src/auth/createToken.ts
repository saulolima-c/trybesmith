import jwt, { SignOptions } from 'jsonwebtoken';
import { IdUser } from '../interfaces/userInterface';
import UsersService from '../services/userService';

const SECRET = 'vou te contar um segredo';

const generateToken = async (username:string, password:string):Promise<string> => {
  const { id }:IdUser = await UsersService.executeLogin(username, password);
  const token: string = jwt.sign(
    {
      id,
      username,
    },
    SECRET,
    {
      expiresIn: '15d',
      algorithm: 'HS256',
    },
  );
  return token as string;
};

const jwtConfig: SignOptions = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const verifyToken = (token: string) => {
  const user = jwt.verify(token, SECRET, jwtConfig);
  return user;
};

export default { generateToken, verifyToken };