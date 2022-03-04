import { Router } from 'express';
import orderController from '../controllers/orderController';
import validations from '../middlewares/productMiddle';
import validateToken from '../auth/validateJWT';

const router = Router();

router.post(
  '/',
  validateToken,
  validations.validateProducts,
  orderController.createNewOrder,
);

export default router;