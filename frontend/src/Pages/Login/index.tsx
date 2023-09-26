import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Spinner,
} from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { saveToStore, validator } from '@/utils/contants';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginServices } from '@/services/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setInfoWhenLogin } from '@/reducers/auth';
import { RootState } from '@/store';

const schema = yup.object({
  email: yup.string().required(validator.REQUIRED).email(validator.EMAIL),
  password: yup.string().required(validator.REQUIRED).min(5, validator.MIN),
});

export default function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.authen);

  const { register, handleSubmit, formState } = useForm<ILoginInput>({
    resolver: yupResolver(schema),
  });
  const { errors, isSubmitting } = formState;

  const onLogin: SubmitHandler<ILoginInput> = async (values) => {
    try {
      const { message, status, user } = await loginServices(values);
      if (status === 200) {
        toast.success(message);
        dispatch(setInfoWhenLogin(user));
        saveToStore('user', user);
        navigate('/');
      } else {
        toast.info(message);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
    }
  };

  const onShowPass = (e: ChangeEvent<HTMLInputElement>) =>
    setShow(e.target.checked);

  useEffect(() => {
    if (user && user?.email) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className='bg-info-subtle'>
      <Container>
        <Row className='min-vh-100 align-items-md-center align-items-start'>
          <Col className='d-none d-md-block' md={6}>
            <Link to='/'>
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
              <Form autoComplete='off' onSubmit={handleSubmit(onLogin)}>
                <Form.Group className='mb-3' controlId='email'>
                  <Form.Label className='fw-semibold'>Email</Form.Label>
                  <Form.Control
                    {...register('email')}
                    className={`p-3 ${errors.email && 'is-invalid'}`}
                    placeholder='name@example.com'
                  />
                  {errors && errors.email && (
                    <p className='text-danger fs-6'>{errors.email.message}</p>
                  )}
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                  <Form.Label className='fw-semibold'>Password</Form.Label>
                  <Form.Control
                    {...register('password')}
                    type={show ? 'text' : 'password'}
                    className={`p-3 ${errors.password && 'is-invalid'}`}
                    placeholder='Your password...'
                  />
                  {errors && errors.password && (
                    <p className='text-danger fs-6'>
                      {errors.password.message}
                    </p>
                  )}
                </Form.Group>

                <FormGroup className='mb-3 d-flex justify-content-end none-select'>
                  <Form.Check
                    onChange={onShowPass}
                    type='checkbox'
                    label='Show password'
                    id='Show password'
                    checked={show}
                  />
                </FormGroup>

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
                    'Login with accounts'
                  )}
                </Button>
              </Form>

              <p className='text-center text-primary my-3'>
                Forgot password???
              </p>
              <hr className='border border-primary'></hr>

              <div className='text-center'>
                <Button variant='warning' className='text-white'>
                  Create an accounts
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
