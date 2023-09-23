import { Fragment } from 'react';
import Toasty from './components/Notify';
import AppRoutes from './Routes';

const App = () => {
  return (
    <Fragment>
      <AppRoutes />
      <Toasty />
    </Fragment>
  );
};

export default App;
