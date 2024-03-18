import { IoChevronBack } from 'react-icons/io5';
import { RequestSingular } from './RequestSingular';

const HasNoRequests = () => {
    return (
        <div className='flex flex-col items-center justify-center px-4 text-center text-white font-bold text-xl gap-2 h-lvh'>
            <span>You have no pending requests</span>
            <label
                htmlFor='drawer-sidebar'
                className='btn btn-primary drawer-button md:hidden mt-4'
            >
                <IoChevronBack className='w-8 h-8' />
            </label>
        </div>
    );
};

const HasRequests = () => {
    const reqs = ['waldomero', 'biri', 'juerzo', 'hurón'];
    return (
        <>
            <div className='bg-primary px-4 py-4 mb-2 flex items-center'>
                <label
                    htmlFor='drawer-sidebar'
                    className='btn btn-primary drawer-button md:hidden'
                >
                    <IoChevronBack className='w-8 h-8' />
                </label>
                <span className='font-bold text-white'>Pending Requests</span>
            </div>

            <div className='flex flex-col items-center px-4 flex-1 mt-2 overflow-y-auto overflow-x-hidden'>
                {reqs?.map((user) => (
                    <RequestSingular key={user} req={user} />
                ))}
            </div>
        </>
    );
};

export const RequestList = () => {
    const reqs = ['waldomero', 'biri', 'juerzo'];

    return (
        <div className='flex flex-col w-lvw h-lvh'>
            {reqs.length == 0 ? <HasNoRequests /> : <HasRequests />}
        </div>
    );
};
