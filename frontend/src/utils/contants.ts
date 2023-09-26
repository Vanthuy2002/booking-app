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

const saveToStore = (key: string, value: User | null) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

const getFromStore = (key: string) => {
  const user = localStorage.getItem(key);
  return JSON.parse(user as string);
};

export { cloneDeep, validator, pathRoutes, saveToStore, getFromStore };
