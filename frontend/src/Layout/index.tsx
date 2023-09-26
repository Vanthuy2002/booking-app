import BasicNav from '@/components/Nav';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { getFromStore, pathRoutes } from '@/utils/contants';
import { setInfoWhenLogin } from '@/reducers/auth';

export default function MainLayout() {
  const { user } = useSelector((state: RootState) => state.authen);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null) {
      const data = getFromStore('user');
      dispatch(setInfoWhenLogin(data));
    }
  }, [dispatch, user]);

  return (
    <section className='App'>
      <BasicNav user={user} />
      <section className='spacing-to-nav'>
        {(user && user.fullName) || pathname === '/' ? (
          <Outlet />
        ) : (
          <Navigate to={pathRoutes.LOGIN} />
        )}
      </section>
    </section>
  );
}
