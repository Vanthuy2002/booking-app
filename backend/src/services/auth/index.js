import { comparePassword, findByEmail } from '../../helpers';

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

export { loginService };
