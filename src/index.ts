import express, { Express } from 'express';
import itemRouter from './routes/item-routes';

const app: Express = express();

app.use(express.json());

app.use('/items', itemRouter);

app.listen(5000, () => {});