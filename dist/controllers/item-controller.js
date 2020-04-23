"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items = [
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
class ItemController {
    static index(req, res, next) {
        if (Object.keys(req.query).length !== 0) {
            // Filter berdasarkan name
            const matches = []; // Deklarasi variabel hasil
            const toSearch = (req.query.q !== undefined) ? String(req.query.q) : ''; // Deklarasi variabel kata kunci pencarian
            const price = (req.query.price !== undefined) ? Number(Object.values(req.query.price)) : false; // Deklarasi variabel harga
            const comparison = (req.query.price !== undefined) ? String(Object.keys(req.query.price)) : false; // Deklarasi variabel pembanding
            items.forEach(item => {
                // Foreach variabel item
                if (item.name.indexOf(toSearch) > -1) {
                    // Mencari nilai dari variabel item yang sesuai dengan kata kunci pencarian
                    if (price !== false) {
                        // Jika variabel harga tidak false
                        switch (comparison) {
                            // Menyesuaikan hasil dengan pembanding
                            case 'is':
                                if (item.price === price)
                                    matches.push(item);
                                break;
                            case 'lte':
                                if (item.price <= price)
                                    matches.push(item);
                                break;
                            case 'gte':
                                if (item.price >= price)
                                    matches.push(item);
                                break;
                            default:
                                matches.push(item);
                                break;
                        }
                    }
                    else {
                        // Jika variabel harga false
                        matches.push(item);
                    }
                }
            });
            if (matches.length === 0)
                // Throw error jika item tidak ditemukan
                return res.status(404).send({
                    errors: {
                        message: 'Items not found',
                    }
                });
            return res.send(matches);
        }
        return res.send(items);
    }
    static store(req, res, next) {
        // Push req.body ke items
        items.push(req.body);
        // Menampilkan balikan
        res.send(req.body);
    }
    static show(req, res, next) {
        const id = Number(req.params.id);
        /* Mencari data bersarkan id */
        /* Jika menggunakan .filter() mengembalikan array items dengan indeks yang memliki id yang dicari. */
        // const result = items.filter( item => {
        //     if (item.id == id) {
        //         return item.id == id;   
        //     }
        // });
        /* Jika menggunakan .find() mengembalikan indeks dari array items yang meiliki id yang dicari */
        const result = items.find(item => {
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
    static update(req, res, next) {
        const id = Number(req.params.id);
        const result = items.find(item => {
            return item.id == id;
        });
        if (!result) {
            return res.status(404).send({
                errors: {
                    message: 'Item not found',
                }
            });
        }
        result.name = req.body.name;
        result.price = req.body.price;
        res.send(result);
    }
    static destroy(req, res, next) {
        const id = Number(req.params.id);
        const index = items.findIndex(item => {
            return item.id === id;
        });
        if (index === -1) {
            return res.status(404).send({
                errors: {
                    message: 'Item not found',
                }
            });
        }
        const result = items.splice(index, 1);
        res.send(result);
    }
}
exports.default = ItemController;
/* Function Based */
// export default const get = (req: Request, res: Response, next: NextFunction) => {
//     res.send($items);
// };
/*
    Keyword 'export default' menandakan, bagian file dengan keyword tersebut akan otomatis ter-export ketika melakukan import dari file lain. Tanpa perlu mendefinisikan bagian tersebut.
*/ 
//# sourceMappingURL=item-controller.js.map