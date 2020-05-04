import React from 'react';
import './Spinner.css';
import Logo from '../../assets/images/Logo.png';

const Spinner = () => {
  return (
       <div className='centering '>
          <div className='flex flex-col items-center'>
              <div className='mb-3'>
                  <img src={Logo} alt="Logo" className="w-20 h-10 inline-block md:w-32"/>
              </div>
              <div className="lds-roller">
                  <div/>
                  <div/>
                  <div/>
                  <div/>
                  <div/>
                  <div/>
                  <div/>
                  <div/>
              </div>
          </div>
       </div>
  );
};

export default Spinner;
