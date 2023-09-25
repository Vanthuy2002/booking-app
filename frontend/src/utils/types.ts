export interface IMenuList {
  id: number;
  name: string;
  url: string;
}

export interface IPath {
  [P: string]: string;
}

export interface ILoginInput {
  email: string;
  password: string;
}
