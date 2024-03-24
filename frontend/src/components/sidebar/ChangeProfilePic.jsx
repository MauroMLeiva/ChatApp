import { useRef } from 'react';
import { CgProfile } from 'react-icons/cg';
import { useAuthStore } from '../../hooks/useAuthStore';

export const ChangeProfilePic = () => {
    const fileInputRef = useRef();
    const { startUploadingPicture } = useAuthStore();

    const handleFileUpload = ({ target }) => {
        if (target.files.length === 0) return;

        startUploadingPicture(target.files[0]);
    };

    return (
        <>
            <input
                type='file'
                ref={fileInputRef}
                onChange={handleFileUpload}
                style={{ display: 'none' }}
            />

            <button
                className='flex mb-3 gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-primary text-black hover:text-white'
                onClick={() => fileInputRef.current.click()}
            >
                <CgProfile className='w-10 h-10 cursor-pointer' />

                <p className='font-semibold'>Change profile picture</p>
            </button>
        </>
    );
};