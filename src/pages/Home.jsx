import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components';
import classes from './Home.module.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='page'>
        <h1 className={classes.welcome}>Welcome to Receipt-Sync</h1>
        <p className={classes.subheading}>
          Create, Store, <span className='accent'>Share</span> and
          <span className='accent'> Download</span> Receipts for free
        </p>
        <div className={classes.get_started_box}>
          <Link to='/register' className={classes.get_started}>
            Get Started Now
          </Link>
        </div>
        <div className={classes.thumbnail}></div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro veniam
        possimus unde ut ipsam ab voluptate sit. Error, deleniti, aperiam
        similique, sit perspiciatis labore natus quia corrupti velit rerum
        officia omnis obcaecati sunt architecto earum nihil. Voluptatibus, est
        dicta? Perspiciatis deserunt commodi amet, ipsam fuga sed laudantium
        inventore tenetur suscipit.
      </main>
    </>
  );
};

export default Home;
