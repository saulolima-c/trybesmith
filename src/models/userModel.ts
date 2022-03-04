import connection from './connection';
import { IUser, IdUser } from '../interfaces/userInterface';

const createUser = async (data: IUser): Promise<void> => {
  const { username, classe, level, password } = data;
  await connection
    .execute(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
};

const getUser = async (username:string): Promise<IdUser> => {
  const [res] = await connection
    .execute('SELECT * FROM Trybesmith.Users WHERE username = (?)', [username]);
  const [user] = res as IdUser[];
  return user;
};

export default {
  createUser,
  getUser,
};