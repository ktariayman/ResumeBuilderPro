const port = 5000;
import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
// import { userRouter, authRouter } from './routes';
const app: Application = express();
// connectDB();
app.use(cors());
app.use(express.json());

//routes
// app.use('/user', userRouter);
// app.use('/auth', authRouter);
app.get('/health', (req: Request, res: Response) => {
  res.send('healthy');
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('server us listinig', PORT);
});
