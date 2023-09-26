import BasicNav from '@/components/Nav';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { getFromStore } from '@/utils/contants';
import { setInfoWhenLogin } from '@/reducers/auth';

export default function MainLayout() {
  const { user } = useSelector((state: RootState) => state.authen);
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
        <Outlet></Outlet>
      </section>
    </section>
  );
}
