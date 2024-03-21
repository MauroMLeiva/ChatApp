import { RiInboxArchiveFill } from 'react-icons/ri';
import { useUiStore } from '../../hooks/useUiStore';
import { useChatStore } from '../../hooks/useChatStore';

export const Requests = () => {
    const { setReqsView } = useUiStore();
    const { requests } = useChatStore();

    const handleClick = () => {
        setReqsView();
    };

    return (
        <button
            className={
                requests.length == 0
                    ? 'btn-disabled text-gray-400'
                    : 'bg-secondary text-black hover:text-white'
            }
            onClick={handleClick}
        >
            <div className='flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-primary'>
                <RiInboxArchiveFill className='w-8 h-8' />

                <p className='font-semibold'>Requests ({requests.length})</p>
            </div>
        </button>
    );
};
