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

const menuOptions = [{ id: 1, name: 'User', to: 'manage/user' }];

const cloneDeep = <T>(object: T): T => {
  const newObject = JSON.parse(JSON.stringify(object));
  return newObject;
};

const saveToStore = (key: string, value: User | null) => {
  return sessionStorage.setItem(key, JSON.stringify(value));
};

const getFromStore = (key: string) => {
  const user = sessionStorage.getItem(key);
  return JSON.parse(user as string);
};

const deleteValue = (key: string) => {
  return sessionStorage.removeItem(key);
};

export {
  cloneDeep,
  validator,
  pathRoutes,
  saveToStore,
  getFromStore,
  menuOptions,
  deleteValue,
};
