/* eslint-disable no-unused-vars */
export enum pathRoutes {
  HOME = '/',
  LOGIN = 'login',
  REGISTER = 'register',
}

const cloneDeep = <T>(object: T): T => {
  const newObject = JSON.parse(JSON.stringify(object));
  return newObject;
};

export { cloneDeep };
