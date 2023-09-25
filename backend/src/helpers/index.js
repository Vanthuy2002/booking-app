import db from '../models';
import bcrypt from 'bcrypt';

const findByEmail = async (email) => {
  const user = await db.User.findOne({
    attributes: ['email', 'password', 'roleId'],
    where: email,
    raw: true,
  });
  if (user) return user;
  return false;
};

const comparePassword = (pass, hassPass) => {
  const isMatched = bcrypt.compareSync(pass, hassPass);
  if (isMatched) return true;
  return false;
};

export { findByEmail, comparePassword };
