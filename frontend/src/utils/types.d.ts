interface IMenuList {
  id: number;
  name: string;
  url: string;
}

interface IPath {
  [P: string]: string;
}

interface ILoginInput {
  email: string;
  password: string;
}

interface User {
  email?: string;
  fullName?: string;
  roleId?: string;
  accessToken?: string;
}

interface IResponseLogin {
  message: string;
  status: number;
  user: User;
}
