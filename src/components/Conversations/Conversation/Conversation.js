import React from 'react';
import suggestImg from "../../../assets/images/Ellipse 9@2x.png";

const Conversation = () => {
    return (
        <div className='bg-white rounded-md p-2 cursor-pointer mx-1 mt-2 shadow-md hover:bg-indigo-200 transition ease-out duration-500'>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <img src={suggestImg} alt="girl" className='h-16 w-16 border-indigo-200 border-4 rounded-full'/>
                </div>
                <div className='w-1/3'>
                    <h3 className='font-bold'> San Smith</h3>
                    <p className='text-sm'>Douala, Cameroun</p>
                </div>
                <div className='w-1/3 mr-4'>
                    <p className='text-xs whitespace-no-wrap text-center'>30 min ago</p>
                    <div className='bg-indigo-700 rounded-full h-4 w-4 shadow-md mt-2 mx-auto'>
                        <p className='text-white text-center text-xs'>5</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Conversation;