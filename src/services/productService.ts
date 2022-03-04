import { IprodComp } from '../interfaces/productInterface';
import productModel from '../models/productModel';

const registerProduct = async (data: IprodComp): Promise<IprodComp> => {
  const product = await productModel.putProd(data);
  return product as IprodComp;
};

const getAllProducts = async () => {
  const all = await productModel.getAll();
  return all;
};

export default {
  registerProduct,
  getAllProducts,
};