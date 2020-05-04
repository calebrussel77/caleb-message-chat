import React from 'react';

import CurrentProfilInfo from "../../components/CurrentProfilInfo/CurrentProfilInfo";
import Suggestions from "../../components/Suggestions/Suggestions";
import Conversations from "../../components/Conversations/Conversations";
import media from '../../assets/images/Icon material-attach-file.svg';
import send from '../../assets/images/Icon feather-send.svg';

import Input from "../../UI/Input/Input";

const Chat = () => {
    return (
        <div className='flex items-center space-x-4 pb-10'>
            <div className='conversation w-1/3 mt-auto'>
                <h2 className='font-bold text-gray-900 text-2xl border-b-4 border-indigo-700 mx-auto pb-2 shadow-xl'>Conversations</h2>
                   <Conversations/>
            </div>
            <div className='w-2/3 h-full mt-auto'>
                <div className='w-full'>
                    <div className='overflow-y-auto h-72 bg-transparent mx-3 mt-16'>

                    </div>
                    <form className='mx-5 flex flex-row items-center justify-center py-3 mt-2'>
                        <div className='cursor-pointer'>
                            <img src={media} alt="media" className='h-8 mr-3 hover:text-indigo-800 fill-current inline-block stroke-current'/>
                        </div>
                        <div className='max-w-xl w-full '>
                            <Input className='w-full border-2 border-gray-500 py-2 px-2 placeholder-gray-700 rounded-lg bg-transparent focus:outline-none focus:border-indigo-700'
                                   placeholder='write something here...'/>
                        </div>
                        <div className='cursor-pointer'>
                            <img src={send} alt="send" className='h-8 ml-3 block'/>
                        </div>
                    </form>
                </div>
                </div>
            <div className='w-1/3 mt-auto'>
                <div className='contactInfo'>
                    <CurrentProfilInfo/>
                </div>
                <div className='rounded-lg shadow-md mt-6'>
                    <div className='bg-white '>
                        <h2 className='font-bold text-gray-900 text-2xl border-b-4 border-indigo-700 py-2 shadow-xl'>Suggestions</h2>
                        <Suggestions/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;