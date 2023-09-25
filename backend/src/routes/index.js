import authRoutes from './auth';

const defineRoutes = (app) => {
  app.use('/auth', authRoutes);
};

export default defineRoutes;
