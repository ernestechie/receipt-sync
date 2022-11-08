import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link to='/' className={classes.logo}>
        Receipt <span className='accent'>Sync</span>
      </Link>
      <ul className={classes.navlinks}>
        <li>
          <Link to='/login' className={classes.login_link}>
            Login
          </Link>
        </li>
        <li>
          <Link to='/register' className={classes.register_link}>
            Create Receipt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
