import { Router } from 'express';
import { create } from '../controllers/product';

const router = Router()

router.post('/products', create)

export default router