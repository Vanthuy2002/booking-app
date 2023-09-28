import { menuOptions, pathRoutes } from '@/utils/contants';
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
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
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
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu dropdown-content mt-3 z-[1] px-2 py-3 shadow bg-base-100 rounded-box w-52'
          >
            {menuOptions.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.to}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <Link
          to={pathRoutes.HOME}
          className='text-xl font-bold normal-case btn btn-ghost'
        >
          Booking Care
        </Link>
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
