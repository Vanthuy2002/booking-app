import { pathRoutes } from '@/utils/contants';
import { Link, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import Avatar from '../User';

type Props = {
  user: User | null;
};

export default function BasicNav(props: Props) {
  const { user } = props;
  const navigate = useNavigate();
  const onChangeURL = (path: string) => navigate(path);

  return (
    <div className='fixed top-0 navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to={pathRoutes.HOME}>Home</Link>
            </li>
          </ul>
        </div>
        <Link to='/' className='text-xl font-bold normal-case btn btn-ghost'>
          Booking
        </Link>
      </div>
      <div className='hidden navbar-center lg:flex'>
        <ul className='px-1 menu menu-horizontal'>
          <li>
            <Link className='font-semibold' to={pathRoutes.HOME}>
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex gap-2 navbar-end'>
        {user && user.fullName ? (
          <Avatar name={user.fullName} />
        ) : (
          <Fragment>
            <button
              onClick={() => onChangeURL(`/${pathRoutes.LOGIN}`)}
              className='btn btn-outline btn-secondary'
            >
              Login
            </button>
            <button
              onClick={() => onChangeURL(`/${pathRoutes.REGISTER}`)}
              className='btn btn-primary'
            >
              Register
            </button>
          </Fragment>
        )}
      </div>
    </div>
  );
}
