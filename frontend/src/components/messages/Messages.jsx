import { MessageSingular } from './MessageSingular';

export const Messages = () => {
    return (
        <div className='px-4 flex-1 mt-2 overflow-y-auto overflow-x-hidden'>
            <MessageSingular />
            <MessageSingular />
            <MessageSingular />
            <MessageSingular />
        </div>
    );
};
