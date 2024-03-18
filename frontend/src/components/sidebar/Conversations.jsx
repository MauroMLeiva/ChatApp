import { ConversationSingular } from './ConversationSingular';

export const Conversations = () => {
    return (
        <div className='py-2 flex flex-col h-[60%] overflow-auto mb-2'>
            <ConversationSingular />
            <ConversationSingular />
            <ConversationSingular />
        </div>
    );
};
