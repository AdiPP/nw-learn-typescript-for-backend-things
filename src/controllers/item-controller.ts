import { Request, Response, NextFunction } from 'express';
import Item from '../models/item';

const items: Item[] = [
    {
        "id": 1,
        "name": "Keyboard",
        "price": 10000
    },
    {
        "id": 2,
        "name": "Mouse",
        "price": 5000
    },
    {
        "id": 3,
        "name": "Flash Disk",
        "price": 20000
    }
];

/* Class Based */
export default class ItemController {
    static index(req: Request, res: Response, next: NextFunction) {
        res.send(items);
    }

    static store(req: Request, res: Response, next: NextFunction) {
        
        // Push req.body ke items
        items.push(req.body);
        
        // Menampilkan balikan
        res.send(req.body);
    }

    static show(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);

        /* Mencari data bersarkan id */
        /* Jika menggunakan .filter() mengembalikan array items dengan indeks yang memliki id yang dicari. */
        // const result = items.filter( item => {
        //     if (item.id == id) {
        //         return item.id == id;   
        //     }
        // });

        /* Jika menggunakan .find() mengembalikan indeks dari array items yang meiliki id yang dicari */
        const result: Item = items.find( item => {
            return item.id == id;
        });

        if (!result) {
            return res.status(404).send({
                errors: {
                    message: 'Item not found',
                }
            });
        }

        res.send(result);
    }

    static update(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);

        const result: Item = items.find( item => {
            return item.id == id;
        } )

        if (!result) {
            return res.status(404).send({
                errors: {
                    message: 'Item not found',
                }
            })
        }

        result.name = req.body.name;
        result.price  = req.body.price;

        res.send(result);
    }

    static destroy(req: Request, res: Response, next: NextFunction) {
        const id: Number = Number(req.params.id);

        const index = items.findIndex( item => {
            return item.id === id;
        });

        if (index === -1) {
            return res.status(404).send({
                errors: {
                    message: 'Item not found',
                }
            })
        }

        const result = items.splice(index, 1);

        res.send(result);
    }
}

/* Function Based */
// export default const get = (req: Request, res: Response, next: NextFunction) => {
//     res.send($items);
// };

/* 
    Keyword 'export default' menandakan, bagian file dengan keyword tersebut akan otomatis ter-export ketika melakukan import dari file lain. Tanpa perlu mendefinisikan bagian tersebut.
*/