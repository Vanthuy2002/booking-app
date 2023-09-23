import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = process.env.DB;
const user = process.env.USER;
const type = process.env.TYPE;

export const connectToDb = async () => {
  const sequelize = new Sequelize(db, user, null, {
    host: 'localhost',
    dialect: type,
  });
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error(error.toString());
  }
};
