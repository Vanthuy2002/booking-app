import BasicNav from '@/components/Nav';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <section className='App'>
      <BasicNav />
      <section className='spacing-to-nav'>
        <Outlet></Outlet>
      </section>
    </section>
  );
}
