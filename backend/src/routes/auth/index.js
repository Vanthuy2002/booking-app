import { Router } from 'express';
import authCtrl from '../../controllers/auth';

const authRoutes = Router();

authRoutes.post('/login', authCtrl.handleLogin);

export default authRoutes;
