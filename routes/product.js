import { Router } from 'express';
import { create, list, read, remove, search, update } from '../controllers/product';
import { userById } from '../controllers/user';
import { isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';

const router = Router()

router.post('/products/:userId', requireSignin, isAuth, isAdmin, create)
router.get('/products',list)
router.get('/products/:id', read);
router.delete('/products/:id/:userId', requireSignin, isAuth, isAdmin, remove);
router.put("/products/:id/:userId", requireSignin, isAuth, isAdmin, update);
router.post("/search", search)

router.param("userId", userById)

export default router