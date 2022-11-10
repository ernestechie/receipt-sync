import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Spinner } from '../components';
import classes from './Login.module.css';
import { getAuth } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const formInputHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const isFormValid = email.trim().length > 0 && password.trim().length > 0;

  const loginUserHandler = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsLoading(true);
      try {
        const auth = getAuth();
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);

        navigate('/dashboard');
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    } else {
      toast.error('Please check input');
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Navbar />
      <section className='page'>
        <h2>Login to your account</h2>
        <form className={classes.login_form}>
          <input
            type='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={formInputHandler}
          />
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={formInputHandler}
          />
          <button
            type='submit'
            className={classes.login_btn}
            onClick={loginUserHandler}
          >
            Sign in
          </button>

          <p>
            Don't have an account?{' '}
            <Link to='/register' className='accent'>
              {' '}
              Register
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
