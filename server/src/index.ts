import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.send('healthy');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
