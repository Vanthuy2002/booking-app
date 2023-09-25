/* eslint-disable no-unused-vars */
enum pathRoutes {
  HOME = '/',
  LOGIN = 'login',
  REGISTER = 'register',
}

enum validator {
  REQUIRED = 'This field is required',
  EMAIL = 'This field must be an email',
  MIN = 'Password must be less than 5 characters',
}

const cloneDeep = <T>(object: T): T => {
  const newObject = JSON.parse(JSON.stringify(object));
  return newObject;
};

export { cloneDeep, validator, pathRoutes };
