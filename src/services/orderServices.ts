import orderModel from '../models/orderModel';
import { Order } from '../interfaces/orderInterface';

const createOrder = async (userId:number, products:[]): Promise<Order> => {
  const id = await orderModel.registerOrder(userId, products);
  return id;
};

export default {
  createOrder,
};