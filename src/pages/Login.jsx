import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

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
    if (isFormValid) {
      const user = JSON.parse(localStorage.getItem('user'));
      // console.log(user.email, user.password);

      if (user.email === email && user.password === password) {
        console.log('Logged In', user);
        navigate('/dashboard');
      } else {
        console.log('User does not exist');
      }
    } else {
      console.log('Check form input and try again');
    }

    e.preventDefault();
  };

  return (
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
  );
};

export default Login;
