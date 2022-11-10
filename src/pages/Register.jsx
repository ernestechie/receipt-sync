import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components';
import classes from './Register.module.css';

const Register = () => {
  const registerUserHandler = async (e) => {
    console.log('New user registered');

    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <section className='page'>
        <h2>Create a Business Account</h2>
        <form className={classes.signup_form}>
          <div className={classes.input_group}>
            <input type='text' id='name' placeholder='Company Name' />
            <input type='address' id='adress' placeholder='Address' />
          </div>
          <div className={classes.input_group}>
            <input type='tel' id='phone' placeholder='Phone Number' />
            <input type='email' id='email' placeholder='Email' />
          </div>
          <div className={classes.input_group}>
            <input type='password' id='password' placeholder='Password' />
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirm Password'
            />
          </div>

          <button
            type='submit'
            className={classes.signup_btn}
            onClick={registerUserHandler}
          >
            Register
          </button>

          <p>
            Already have an account?{' '}
            <Link to='/login' className='accent'>
              {' '}
              Sign in
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Register;
