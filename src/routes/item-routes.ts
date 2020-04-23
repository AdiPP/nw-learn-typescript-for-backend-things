import { Router } from 'express';
import ItemController from '../controllers/item-controller';

const router = Router();

router.get('/', ItemController.index);
router.get('/', ItemController.index);
router.get('/:id', ItemController.show);
router.post('/', ItemController.store);
router.put('/:id', ItemController.update);
router.delete('/:id', ItemController.destroy);

export default router;