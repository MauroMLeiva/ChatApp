import { RiInboxArchiveFill } from 'react-icons/ri';

export const Requests = () => {
    const reqs = ['waldomero', 'biri', 'juerzo'];

    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <button
            className={
                reqs.length == 0
                    ? 'btn-disabled text-gray-400'
                    : 'bg-secondary text-black hover:text-white'
            }
            onClick={handleClick}
        >
            <div className='flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-primary'>
                <RiInboxArchiveFill className='w-8 h-8' />

                <p className='font-semibold'>Requests ({reqs.length})</p>
            </div>
        </button>
    );
};
