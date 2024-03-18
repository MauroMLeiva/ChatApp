import { IoChevronBack } from 'react-icons/io5';

import { MessageInput } from './MessageInput';
import { Messages } from './Messages';

const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-lvh'>
            <div className='flex flex-col px-4 text-center text-primary font-bold text-xl items-center gap-2'>
                <span>Select a conversation to start messaging</span>
                <label
                    htmlFor='drawer-sidebar'
                    className='btn btn-primary drawer-button md:hidden mt-4'
                >
                    <IoChevronBack className='w-8 h-8' />
                </label>
            </div>
        </div>
    );
};

const ChatSelected = () => {
    return (
        <>
            <div className='bg-primary px-4 py-4 mb-2 flex items-center'>
                <label
                    htmlFor='drawer-sidebar'
                    className='btn btn-primary drawer-button md:hidden'
                >
                    <IoChevronBack className='w-8 h-8' />
                </label>
                <div className='w-10 rounded-full mr-4'>
                    <img
                        src='https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg'
                        alt='user profile picture'
                    />
                </div>
                <span className='label-text mr-1'> To: </span>
                <span className='font-bold'>John Doe</span>
            </div>

            <Messages />
            <MessageInput />
        </>
    );
};
export const MessageContainer = () => {
    const chatSelected = true;
    return (
        <div className='flex flex-col md:h-full'>
            {chatSelected ? <ChatSelected /> : <NoChatSelected />}
        </div>
    );
};
