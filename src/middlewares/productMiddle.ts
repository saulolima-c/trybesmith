import { Request, Response, NextFunction } from 'express';
import StatusCodes from '../enums/statusCodes';
import { IprodComp } from '../interfaces/productInterface';

const validateName = async (req:Request, res:Response, next:NextFunction) => {
  const { name }: IprodComp = req.body;
  if (!name || name === '') {
    return res.status(StatusCodes.BadRequest).json({
      error: 'Name is required',
    });
  }

  if (typeof name !== 'string') {
    return res.status(StatusCodes.UnprocessableEntity).json({
      error: 'Name must be a string',
    });
  }

  if (name.length < 3) {
    return res.status(StatusCodes.UnprocessableEntity).json({
      error: 'Name must be longer than 2 characters',
    });
  }

  next();
};

const validateAmount = async (req:Request, res:Response, next:NextFunction) => {
  const { amount }: IprodComp = req.body;
  if (!amount || amount === '') {
    return res.status(StatusCodes.BadRequest).json({
      error: 'Amount is required',
    });
  }
  
  if (typeof amount !== 'string') {
    return res.status(StatusCodes.UnprocessableEntity).json({
      error: 'Amount must be a string',
    });
  }
  
  if (amount.length < 3) {
    return res.status(StatusCodes.UnprocessableEntity).json({
      error: 'Amount must be longer than 2 characters',
    });
  }
  
  next();
};

const validateProducts = async (req:Request, res:Response, next:NextFunction) => {
  const { products } = req.body;
  if (!products) {
    return res.status(StatusCodes.BadRequest).json({
      error: 'Products is required',
    });
  }
  
  if (products.length === 0) {
    return res.status(StatusCodes.UnprocessableEntity).json({
      error: 'Products can\'t be empty',
    });
  }

  if (!Array.isArray(products)) {
    return res.status(StatusCodes.UnprocessableEntity).json({
      error: 'Products must be an array of numbers',
    });
  }

  next();
};

export default {
  validateName,
  validateAmount,
  validateProducts,
};