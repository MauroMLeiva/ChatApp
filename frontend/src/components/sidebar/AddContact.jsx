import { IoMdPersonAdd } from 'react-icons/io';

export const AddContact = () => {
    return (
        <div className='flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-primary text-black hover:text-white'>
            <IoMdPersonAdd className='w-8 h-8' />

            <p className='font-semibold'>Add a new Contact</p>
        </div>
    );
};
