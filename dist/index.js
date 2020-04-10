"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const router = express_1.default.Router();
app.use(express_1.default.json());
;
const items = [];
router.get('/items', (req, res, next) => {
    res.send(items);
});
router.post('/items', (req, res, next) => {
    items.push(req.body);
    res.send(req.body);
});
app.use(router);
app.listen(5000, () => { });
//# sourceMappingURL=index.js.map