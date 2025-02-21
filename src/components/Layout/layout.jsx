import React from 'react'
import Header from '../Header/Header';

const layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default layout