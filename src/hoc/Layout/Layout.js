import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navigation />
      <main className='flex-grow pt-10'>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
