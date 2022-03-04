import { Request, Response } from 'express';
import StatusCodes from '../enums/statusCodes';
import orderService from '../services/orderServices';

const createNewOrder = async (req:Request, res:Response) => {
  const { id: userId, products } = req.body;
  const order = await orderService.createOrder(userId, products);
  return res.status(StatusCodes.Created).json({ order });
};

export default {
  createNewOrder,
};