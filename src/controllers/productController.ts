import { Request, Response } from 'express';
import { IprodComp } from '../interfaces/productInterface';
import StatusCodes from '../enums/statusCodes';
import productService from '../services/productService';

const postProduct = async (req: Request, res: Response) => {
  const data = req.body;
  const posted: IprodComp = await productService.registerProduct(data);

  return res.status(StatusCodes.Created).json({ item: posted });
};

const getProducts = async (req:Request, res:Response) => {
  const allP = await productService.getAllProducts();
  return res.status(StatusCodes.OK).json(allP);
};

export default { postProduct, getProducts };