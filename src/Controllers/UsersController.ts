import {Router, Request} from 'express';
import { handelSignupRequest } from '../Routers/UsersRouter';
const router = Router();

router.get('/profile', () => {});
router.post('/signup', handelSignupRequest);
router.patch('/', () => {});
router.delete('/signout/:id', () => {});

export default router;