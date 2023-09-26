import api from '@/config';

const loginServices = async (body: ILoginInput) => {
  const res = await api.post<IResponseLogin>('auth/login', body);
  return res.data;
};

export { loginServices };
