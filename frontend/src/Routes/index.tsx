import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from '@/Layout';
import Loading from '@/components/Loading';

const Home = lazy(() => import('@/Pages/Home'));
const Login = lazy(() => import('@/Pages/Login'));
const ManageUser = lazy(() => import('@/Pages/Manager/User'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='manage/user' element={<ManageUser />} />
        </Route>

        <Route path='login' element={<Login />} />
      </Routes>
    </Suspense>
  );
}
