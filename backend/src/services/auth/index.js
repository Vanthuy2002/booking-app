import db from '../../models';
import { comparePassword, findByEmail, hashPassword } from '../../helpers';

const registerServices = async (body) => {
  const { email, password, fullName } = body;
  const isExist = await findByEmail(email);
  if (isExist) {
    return {
      message: 'User adready exists',
      status: 500,
    };
  }

  const hass = hashPassword(password);
  await db.User.create({
    email,
    password: hass,
    fullName,
  });

  return {
    message: 'Register successfully!!',
    status: 201,
  };
};

const loginService = async (body) => {
  const { email, password } = body;
  const user = await findByEmail(email);

  if (user) {
    const isMatched = comparePassword(password, user.password);
    if (isMatched) {
      delete user.password;
      return {
        message: 'Login successfully!!',
        status: 200,
        user,
      };
    } else {
      return {
        message: 'Email or password not correct',
        status: 404,
        user: {},
      };
    }
  }

  return {
    message: 'Email or password not correct',
    status: 404,
    user: {},
  };
};

export { loginService, registerServices };
