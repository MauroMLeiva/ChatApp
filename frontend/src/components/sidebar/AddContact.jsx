import { IoMdPersonAdd } from 'react-icons/io';

export const AddContact = () => {
    return (
        <>
            <button
                className='btn btn-secondary flex gap-2 justify-start items-center rounded p-2 py-1 cursor-pointer hover:bg-primary text-black hover:text-white'
                onClick={() => document.getElementById('add_modal').showModal()}
            >
                <IoMdPersonAdd className='w-8 h-8' />
                <p className='font-semibold'>Add a new Contact</p>
            </button>

            <div>
                <dialog id='add_modal' className='modal'>
                    <div className='modal-box bg-secondary flex flex-col font-bold text-xl text-center text-black'>
                        <span>Add a new Contact</span>
                        <span className='text-lg'>
                            Type the username of your new contact below
                        </span>

                        <div className='modal-action justify-center'>
                            <form method='dialog'>
                                <input
                                    type='text'
                                    className='border text-sm rounded-lg block w-[300px] p-2.5 bg-secondary text-black border-primary mb-4'
                                    placeholder='Username'
                                />

                                <div className='flex justify-between'>
                                    <button className='w-[60px] btn btn-primary'>
                                        Cancel
                                    </button>

                                    <button className='w-[60px] btn btn-primary'>
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    );
};
