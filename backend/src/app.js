import express from 'express';
import dotenv from 'dotenv';
import { defineConfig } from './config';
import { connectToDb } from './db';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

defineConfig(app);
connectToDb();

app.listen(PORT, console.log(`Express are listening at port ${PORT}`));
