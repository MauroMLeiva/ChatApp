import { IoSend } from 'react-icons/io5';

export const MessageInput = () => {
    return (
        <form className='px-4 my-3'>
            <div className='w-full relative'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5 bg-secondary text-black border-primary'
                    placeholder='Type your message'
                />
                <button
                    type='submit'
                    className='absolute inset-y-0 end-0 flex items-center pe-3'
                >
                    <IoSend className='text-primary' />
                </button>
            </div>
        </form>
    );
};
