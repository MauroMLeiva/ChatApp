import { BiLogOut } from 'react-icons/bi';

export const LogoutBtn = () => {
    return (
        <div className='flex mt-auto gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-primary text-black hover:text-white'>
            <BiLogOut className='w-10 h-10 cursor-pointer' />

            <p className='font-semibold'>Logout</p>
        </div>
    );
};
