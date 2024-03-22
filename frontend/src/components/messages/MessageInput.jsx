import { IoSend } from 'react-icons/io5';
import { useChatStore } from '../../hooks/useChatStore';
import { useForm } from '../../hooks/useForm';

const intialForm = {
    message: '',
};

export const MessageInput = () => {
    const { sendMessage, activeConversation } = useChatStore();
    const { message, onInputChange, onResetForm } = useForm(intialForm);

    const handleInput = (event) => {
        event.preventDefault();
        sendMessage(activeConversation[0], message);
        onResetForm();
    };

    return (
        <form className='px-4 my-3' onSubmit={handleInput}>
            <div className='w-full relative'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5 bg-secondary text-black border-primary'
                    placeholder='Type your message'
                    name='message'
                    value={message}
                    onChange={onInputChange}
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
