"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_controller_1 = __importDefault(require("../controllers/item-controller"));
const router = express_1.Router();
router.get('/', item_controller_1.default.index);
router.get('/:id', item_controller_1.default.show);
router.post('/', item_controller_1.default.store);
router.put('/:id', item_controller_1.default.update);
router.delete('/:id', item_controller_1.default.destroy);
exports.default = router;
//# sourceMappingURL=item-routes.js.map