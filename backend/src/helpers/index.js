import db from '../models';
import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

const findByEmail = async (email) => {
  const user = await db.User.findOne({
    where: { email },
    attributes: ['email', 'password', 'roleId'],
    raw: true,
  });
  if (user) return user;
  return false;
};

const hashPassword = (pass) => {
  const hass = bcrypt.hashSync(pass, salt);
  return hass;
};

const comparePassword = (pass, hassPass) => {
  const isMatched = bcrypt.compareSync(pass, hassPass);
  if (isMatched) return true;
  return false;
};

export { findByEmail, comparePassword, hashPassword };
