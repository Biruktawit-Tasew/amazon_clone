import React from 'react'
import Header from '../Header/Header';
import { Outlet } from 'react-router';

const layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default layout