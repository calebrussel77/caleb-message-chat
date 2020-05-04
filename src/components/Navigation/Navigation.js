import React from 'react';
import NavLinks from './NavLinks/NavLinks';
import Logo from '../../assets/images/Logo.png';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="py-2 w-full bg-white flex shadow-xl justify-around items-center bg-white">
      <Link to="/">
        <img
          src={Logo}
          alt="logo-chat"
          className="w-20 h-10 object-center inline-block md:w-32"
        />
      </Link>
      <div>
        <NavLinks />
      </div>
    </header>
  );
};

export default Navigation;
