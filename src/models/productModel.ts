import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product, IprodComp } from '../interfaces/productInterface';

const putProd = async (data: Product): Promise<Product> => {
  const { name, amount } = data;
  const [insertion] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  const { insertId: id } = insertion;
  const product: IprodComp = { id, name, amount };
  return product;
};

const getAll = async ():Promise<IprodComp[]> => {
  const [allProducts] = await connection
    .execute('SELECT * FROM Trybesmith.Products');

  return allProducts as IprodComp[];
};

export default {
  putProd,
  getAll,
};
