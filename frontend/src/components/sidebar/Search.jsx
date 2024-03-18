import { IoSearch } from 'react-icons/io5';

export const Search = () => {
    return (
        <form className='flex items-center gap-2 mt-4'>
            <input
                type='text'
                placeholder='Search'
                className='input input-bordered rounded-full input-primary bg-secondary'
            ></input>
            <button
                type='submit'
                className='btn btn-circle btn-primary text-white'
            >
                <IoSearch className='w-6 h-6 outline-none' />
            </button>
        </form>
    );
};
