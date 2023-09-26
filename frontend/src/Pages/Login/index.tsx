import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { pathRoutes, saveToStore, validator } from '@/utils/contants';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginServices } from '@/services/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setInfoWhenLogin } from '@/reducers/auth';
import { RootState } from '@/store';

const schema = yup.object({
  email: yup.string().required(validator.REQUIRED).email(validator.EMAIL),
  password: yup.string().required(validator.REQUIRED).min(5, validator.MIN),
});

export default function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.authen);

  const { register, handleSubmit, formState } = useForm<ILoginInput>({
    resolver: yupResolver(schema),
  });
  const { errors, isSubmitting } = formState;

  const onLogin: SubmitHandler<ILoginInput> = async (values) => {
    try {
      const { message, status, user } = await loginServices(values);
      if (status === 200) {
        toast.success(message);
        dispatch(setInfoWhenLogin(user));
        saveToStore('user', user);
        navigate('/');
      } else {
        toast.info(message);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
    }
  };

  const onShowPass = (e: ChangeEvent<HTMLInputElement>) =>
    setShow(e.target.checked);

  // useEffect(() => {
  //   if (user && user?.email) {
  //     navigate('/');
  //   }
  // }, [user, navigate]);

  return (
    <div className='relative bg-accent flex flex-col items-center justify-center h-screen overflow-hidden'>
      <div className='w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg'>
        <h1 className='text-3xl font-bold text-center'>
          <Link to={pathRoutes.HOME}>
            <span className='text-info'>Booking</span>
          </Link>
        </h1>
        <form
          className='space-y-4'
          onSubmit={handleSubmit(onLogin)}
          autoComplete='off'
        >
          <div className='form-control'>
            <label className='label'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input
              {...register('email')}
              type='text'
              placeholder='Email Address'
              className='input input-bordered input-info w-full'
            />
            {errors && errors.email && (
              <p className='text-red-500 text-sm'>{errors.email.message}</p>
            )}
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type={show ? 'text' : 'password'}
              {...register('password')}
              placeholder='Enter Password'
              className='input input-bordered input-info w-full'
            />
            {errors && errors.password && (
              <p className='text-red-500 text-sm'>{errors.password.message}</p>
            )}
          </div>

          <div className='form-control'>
            <label className='cursor-pointer label justify-start gap-2'>
              <input
                type='checkbox'
                onChange={onShowPass}
                checked={show}
                className='checkbox checkbox-info'
              />
              <span className='label-text'>Show password</span>
            </label>
          </div>

          <button disabled={isSubmitting} className='btn btn-primary w-full'>
            {isSubmitting ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
