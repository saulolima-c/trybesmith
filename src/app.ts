import express from 'express';
import userRouter from './routers/userRouter';
import loginRouter from './routers/loginRouter';
import productRouter from './routers/productRouter';
import ordersRouter from './routers/ordersRouter';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/orders', ordersRouter);

export default app;
