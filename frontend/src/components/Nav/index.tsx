import { pathRoutes } from '@/utils/contants';
import { Fragment } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';

type Props = {
  user: User | null;
};

export default function BasicNav(props: Props) {
  const { user } = props;
  const navigate = useNavigate();
  const onChangeURL = (path: string) => navigate(path);

  return (
    <Fragment>
      <Navbar expand='lg' className='bg-body-tertiary' fixed='top'>
        <Container>
          <Link to='/' className='navbar-brand'>
            <img
              alt=''
              src='/vite.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            <span className='text-primary fw-bold'>Booking</span>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='w-100 align-items-lg-center '>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
              <div className='d-flex gap-2 flex-grow-1 justify-content-end align-items-center'>
                {user && user.email ? (
                  <Fragment>
                    <Image
                      src='/Jisoo.jpg'
                      className='avatar'
                      roundedCircle
                      alt={user.fullName}
                    />
                    <span className='text-primary-emphasis'>
                      {user.fullName}
                    </span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Button
                      onClick={() => onChangeURL(`/${pathRoutes.LOGIN}`)}
                      variant='outline-secondary'
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => onChangeURL(`/${pathRoutes.REGISTER}`)}
                      variant='primary'
                    >
                      Get Started
                    </Button>
                  </Fragment>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
