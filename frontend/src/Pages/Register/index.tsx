import { Link } from 'react-router-dom';
import { Col, Container, Row, Form, Button, Spinner } from 'react-bootstrap';
import { pathRoutes } from '@/utils/contants';

const isSubmitting = false;

export default function Register() {
  return (
    <div className='bg-info-subtle'>
      <Container>
        <Row className='min-vh-100 align-items-md-center align-items-start'>
          <Col className='d-none d-md-block' md={6}>
            <Link to={pathRoutes.HOME}>
              <p className='fw-bold h1 mb-2 text-start text-primary'>
                Booking Care
              </p>
            </Link>
            <p className='text-start fw-semibold'>
              Login with get full access our power, do anything with your
              imagination
            </p>
          </Col>
          <Col md={6}>
            <Link to='/'>
              <p className='h1 my-5 d-md-none d-block fw-bold text-center text-primary'>
                Booking Care
              </p>
            </Link>
            <div className='p-3 rounded shadow bg-white'>
              <Form autoComplete='off'>
                <Form.Group className='mb-3' controlId='fullname'>
                  <Form.Label className='fw-semibold'>Fullname</Form.Label>
                  <Form.Control type='text' placeholder='something...' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='email'>
                  <Form.Label className='fw-semibold'>Email</Form.Label>
                  <Form.Control placeholder='name@example.com' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                  <Form.Label className='fw-semibold'>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Your password...'
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='repass'>
                  <Form.Label className='fw-semibold'>
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter password again...'
                  />
                </Form.Group>

                <Button
                  style={{ padding: '12px 0' }}
                  className='w-100 fw-bolder'
                  type='submit'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Spinner
                      as='span'
                      animation='border'
                      size='sm'
                      variant='light'
                    />
                  ) : (
                    'Create accounts'
                  )}
                </Button>
              </Form>

              <p className='text-center text-primary my-3'>
                Forgot password???
              </p>
              <hr className='border border-primary'></hr>

              <div className='text-center'>
                <Button variant='warning' className='text-white'>
                  Already have accounts
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
