import { IUser, IdUser } from '../interfaces/userInterface';
import userModel from '../models/userModel';
import loginModel from '../models/loginModel';

const creatingUser = async (data: IUser): Promise<void> => userModel.createUser(data);

const executeLogin = async (username: string, password: string): Promise<IdUser> => {
  const [login] = await loginModel.getByCredentials(username, password);
  
  if (!login || login.password !== password) {
    return {
      message: 'Username or password invalid',
    } as IdUser;
  }
  return login as IdUser; 
};

export default {
  creatingUser,
  executeLogin,
};