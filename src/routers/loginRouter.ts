import { Router } from 'express';
import loginController from '../controllers/loginController';
import validations from '../middlewares/loginMiddle';

const router = Router();

router.post(
  '/',
  validations.validateLogin,
  loginController.login,
);

export default router;