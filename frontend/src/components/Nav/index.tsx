import { menuOptions } from '@/utils/contants';
import { Fragment } from 'react';
import {
  Button,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
} from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const authInfo = false;

export default function BasicNav() {
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
            <span className='text-primary fw-bold'>Booking Care</span>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='w-100 align-items-lg-center '>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
              <NavDropdown
                title='Manager'
                id='basic-nav-dropdown'
                className='mb-2 mb-lg-0'
              >
                {menuOptions.map((menu) => (
                  <Button
                    key={menu.id}
                    variant='light'
                    className='dropdown-item'
                  >
                    {menu.name}
                  </Button>
                ))}
                <NavDropdown.Divider />
                <Button variant='light' className='dropdown-item'>
                  Logout
                </Button>
              </NavDropdown>

              <div className='d-flex gap-2 flex-grow-1 justify-content-end align-items-center'>
                {authInfo ? (
                  <Fragment>
                    <Image src='/Jisoo.jpg' className='avatar' roundedCircle />
                    <span className='text-primary-emphasis'>Name</span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Button
                      onClick={() => onChangeURL('/login')}
                      variant='outline-secondary'
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => onChangeURL('/register')}
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
