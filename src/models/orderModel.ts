import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const updateProductsTable = async (orderId:number, products: number[]) => {
  await Promise.all(products.map(
    (productId) => connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, productId],
    ),
  ));
};

const registerOrder = async (userId:number, products:[]) => {
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUES (?)', [userId]);

  await updateProductsTable(insertId, products);
  return {
    userId,
    products,
  };
};

export default {
  registerOrder,
};