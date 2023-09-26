import { pathRoutes } from '@/utils/contants';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  user: User | null;
};

export default function BasicNav(props: Props) {
  const { user } = props;
  const navigate = useNavigate();
  const onChangeURL = (path: string) => navigate(path);

  return (
    <div className='navbar bg-base-100 fixed top-0'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
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
        <Link to='/' className='btn btn-ghost normal-case text-xl font-bold'>
          Booking
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link className='font-semibold' to={pathRoutes.HOME}>
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end flex gap-2'>
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
      </div>
    </div>
  );
}
