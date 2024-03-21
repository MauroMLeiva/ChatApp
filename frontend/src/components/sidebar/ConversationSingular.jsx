import { useChatStore } from '../../hooks/useChatStore';
import { useUiStore } from '../../hooks/useUiStore';

export const ConversationSingular = ({ username }) => {
    const { selectConversation } = useChatStore();
    const { setMsgsView } = useUiStore();

    const handleClick = () => {
        selectConversation(username);
        setMsgsView();
    };

    return (
        <>
            <button
                className='flex gap-2 items-center text-start rounded p-2 py-1 cursor-pointer hover:bg-primary text-black hover:text-white'
                onClick={handleClick}
            >
                <div className='avatar mr-2 online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src='https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg'
                            alt='user profile picture'
                        />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <p className='font-bold'>{username}</p>
                </div>
            </button>

            <div className='divider my-0 py-0 h-1' />
        </>
    );
};
