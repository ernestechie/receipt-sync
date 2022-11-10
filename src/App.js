import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components';
import { Home, Login, NotFound, Register, Welcome } from './pages';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Welcome />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
