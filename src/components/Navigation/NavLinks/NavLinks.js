import React from 'react';
import Button from '../../../UI/Button/Button';
import {Link} from 'react-router-dom';

const NavLinks = () => {
  return (
    <nav>
      <Link to="/register">
        <Button className="p-2 hover:shadow-xl border-2 border-indigo-700 text-gray-800 mr-2 font-semibold rounded-md text-sm md:text-base md:p-2">
          Register{' '}
        </Button>
      </Link>
      <Link to="/login">
        <Button className="p-2 hover:shadow-xl bg-indigo-700 text-white mr-2 font-semibold rounded-md text-sm md:text-base md:py-2 md:px-3">
          Login
        </Button>
      </Link>
    </nav>
  );
};

export default NavLinks;
