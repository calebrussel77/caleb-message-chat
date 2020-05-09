import React from 'react';

import BannerImg from '../../assets/images/Banner-img.svg';
import {Link} from "react-router-dom";
import Button from '../../UI/Button/Button';


const Welcome = () => {
  return (
    <div className="md:mt-0 max-w-6xl md:flex md:items-center md:justify-center md:mx-auto text-center px-4 pb-32">


        <div className="md:w-1/2 w-full">
        <h2 className="uppercase text-gray-900 font-extrabold text-2xl leading-snug md:text-4xl lg:whitespace-normal g:whitespace-no-wrap my-3 pb-4 text-left">
            Welcome in your <br/>
            <span className='text-indigo-700'>prefered chat message</span>
        </h2>
        <p className="text-gray-700 font-semibold text-sm md:text-base leading-tight whitespace-normal text-left">
            Connect with your friends and enjoy chat message, images uploads videos uploads, rooms conversation between more than two person
        </p>
            <Link to='/login'>
                <Button className="w-full hover:bg-indigo-800 rounded-md bg-indigo-700 text-sm text-white text-center py-3 shadow-md mt-4 font-semibold">
                    {' '}START HERE
                </Button>
            </Link>
      </div>
      <div className="hidden md:block md:w-1/2 md:pl-10">
        <img src={BannerImg} className="" alt="men with messages" />
      </div>
    </div>
  );
};

export default Welcome;
