import { Router } from 'express';
import authCtrl from '../../controllers/auth';

const authRoutes = Router();

authRoutes.post('/register', authCtrl.handleRegister);

authRoutes.post('/login', authCtrl.handleLogin);

export default authRoutes;
