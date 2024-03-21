import { IoChevronBack } from 'react-icons/io5';

import { MessageInput } from './MessageInput';
import { Messages } from './Messages';

const NoChatSelected = () => {
    return (
        <div className='flex flex-col items-center justify-center px-4 text-center text-white font-bold text-xl gap-2 h-lvh'>
            <span>Select a conversation to start messaging</span>
            <label
                htmlFor='drawer-sidebar'
                className='btn btn-primary drawer-button md:hidden mt-4'
            >
                <IoChevronBack className='w-8 h-8' />
            </label>
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
    // Receive from global state
    const chatSelected = true;
    return (
        <div className='flex flex-col w-lvw h-lvh'>
            {chatSelected ? <ChatSelected /> : <NoChatSelected />}
        </div>
    );
};
