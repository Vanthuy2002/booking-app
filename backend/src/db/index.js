import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = process.env.DB;

export const connectToDb = async () => {
  const sequelize = new Sequelize(`${db}`, 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
  });
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error(error.toString());
  }
};
