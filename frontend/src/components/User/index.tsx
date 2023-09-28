import { logoutUser } from '@/reducers/auth';
import { deleteValue, pathRoutes } from '@/utils/contants';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ModalConfirm } from '../Modal';
import { createPortal } from 'react-dom';

const options = [
  { id: 1, title: 'Profile', to: '/' },
  { id: 2, title: 'Settings', to: '/' },
];

const langs = ['Vietnamese', 'Englang'];

type Props = {
  name: string;
};

export default function Avatar({ name }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const [showLang, setShowLang] = useState<boolean>(false);

  const onToggle = () => setShow(!show);
  const onShowLang = () => setShowLang(!showLang);

  const onLogout = () => {
    dispatch(logoutUser());
    deleteValue('user');
    toast.success('Logout ok!!');
    navigate(pathRoutes.LOGIN);
  };
  return (
    <Fragment>
      <div className='dropdown dropdown-end dropdown-hover'>
        <label tabIndex={0} className='!w-12 btn btn-ghost btn-circle avatar'>
          <div className='rounded-full w-11'>
            <img src='/Jisoo.jpg' />
          </div>
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content first-letter z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          {options.map((item) => (
            <li key={item.id}>
              <Link to={item.to}>{item.title}</Link>
            </li>
          ))}
          <li onClick={onShowLang} className='dropdown dropdown-left'>
            <label>Switch Languages</label>
            {showLang && (
              <ul
                tabIndex={0}
                className='menu dropdown-content mr-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4'
              >
                {langs.map((lang, index) => (
                  <li key={`${lang}${index}`}>
                    <span>{lang}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <button onClick={onToggle} className='px-4 py-2 bg-base-100'>
              Logout
            </button>
          </li>
        </ul>
      </div>

      <span className='font-medium'>{name}</span>
      {createPortal(
        <ModalConfirm onCLose={onToggle} show={show} onHandle={onLogout} />,
        document.body
      )}
    </Fragment>
  );
}
