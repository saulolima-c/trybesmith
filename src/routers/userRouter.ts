import { Router } from 'express';
import userController from '../controllers/userController';
import validations from '../middlewares/userMiddle';

const router = Router();

router.post(
  '/',
  validations.validateUsername,
  validations.validateClass,
  validations.validateLevel,
  validations.validatePassword,
  userController.newUser,
);

export default router;
