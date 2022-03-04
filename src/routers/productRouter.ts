import { Router } from 'express';
import productController from '../controllers/productController';
import validateToken from '../auth/validateJWT';
import validations from '../middlewares/productMiddle';

const router = Router();

router.post(
  '/',
  validations.validateName,
  validations.validateAmount,
  validateToken,
  productController.postProduct,
);

router.get(
  '/',
  validateToken,
  productController.getProducts,
);

export default router;