import { ToastContainer } from 'react-toastify';

export default function Toasty() {
  return (
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme='light'
    />
  );
}
