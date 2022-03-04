import connection from './connection';
import { IdUser } from '../interfaces/userInterface';

const getByCredentials = async (username: string, password: string): Promise<IdUser[]> => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );
  return result as IdUser[];
};

export default {
  getByCredentials,
};