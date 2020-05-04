import React from 'react';

import ProfilImg from "../../assets/images/ChatProfilActive.png";
import Location from "../../assets/images/Icon metro-location.svg";
import Phone from "../../assets/images/Icon feather-phone.svg";

const CurrentProfilInfo = () => {
    return (
        <div className='bg-indigo-200 rounded-md shadow-lg py-6 text-center'>
           <div className='inline-block'>
               <div className='relative h-24 ' >
                   <img src={ProfilImg} alt="men" className='h-full inline-block'/>
                   <div className='bg-indigo-700 rounded-full h-4 w-4 shadow-md mt-2 mx-auto absolute bottom-0 left-1/2 ml-4'/>
               </div>
               <h2 className='text-indigo-700 font-bold my-3 uppercase'>Serges Stephens</h2>
              <div className='text-center'>
                 <div className='inline-block'>
                     <div className='flex items-start text-center w-full'>
                         <img src={Location} alt="location" className='block pr-2 inline-block'/> <p className='text-gray-600'>Douala, Cameroun</p>
                     </div>
                     <div className='flex items-center my-2 text-center w-full'>
                         <img src={Phone} alt="phone" className='block pr-2 inline-block'/> <p className='text-gray-600'>+ 0005282682</p>
                     </div>
                 </div>
              </div>
               <p className='text-xs pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias assumenda corporis debitis doloremque ea eligendi excepturi fuga ipsam.</p>
           </div>
        </div>
    );
};

export default CurrentProfilInfo;