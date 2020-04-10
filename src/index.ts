import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();

const router = express.Router();

app.use(express.json());

interface Item {
    id: number;
    name: string;
    price: number;
};

const items: Item[] = [];

router.get('/items', (req: Request, res: Response, next: NextFunction) => {
    res.send(items);
});

router.post('/items', (req: Request, res: Response, next: NextFunction) => {
    items.push(req.body);

    res.send(req.body);
});

app.use(router);

app.listen(5000, () => {});