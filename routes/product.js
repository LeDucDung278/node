import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/product';

const router = Router()

router.post('/products', create)
router.get('/products',list)
router.get('/products/:id', read);
router.delete('/products/:id', remove);
router.put("/products/:id", update);


export default router