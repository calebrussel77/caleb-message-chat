import React from 'react';

import suggestImg from '../../../assets/images/Ellipse 9@2x.png';
import add from '../../../assets/images/Icon material-person-add.svg';

const Suggestion = () => {
    return (
      <div className='p-2'>
          <div className='bg-gray-200 rounded-md p-2 cursor-pointer shadow-md hover:bg-indigo-200 transition ease-out duration-500'>
              <div className='flex items-center'>
                  <div className=''>
                      <img src={suggestImg} alt="girl" className='h-16 w-16'/>
                  </div>
                  <div className='ml-4'>
                      <h3 className='font-bold'> San Smith</h3>
                      <p className='text-sm'>Douala, Cameroun</p>
                  </div>
                  <div className='ml-10'>
                      <img src={add} alt="add"/>
                  </div>
              </div>

          </div>
      </div>
    );
};

export default Suggestion;