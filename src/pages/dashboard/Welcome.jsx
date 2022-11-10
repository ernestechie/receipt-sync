import { getAuth } from 'firebase/auth';
import React from 'react';
import { Sidebar } from '../../components';
import './Welcome.module.css';

const Welcome = () => {
  const auth = getAuth();
  console.log(auth.currentUser);

  return (
    <>
      <Sidebar />
      <section className='page'>
        <h1>Welcome, User</h1>
      </section>
    </>
  );
};

export default Welcome;
