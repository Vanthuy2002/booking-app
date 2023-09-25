import express from 'express';
import dotenv from 'dotenv';
import { defineConfig } from './config';
import { connectToDb } from './db';
import defineRoutes from './routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

defineConfig(app);
connectToDb();
defineRoutes(app);

app.listen(PORT, console.log(`Express are listening at port ${PORT}`));
