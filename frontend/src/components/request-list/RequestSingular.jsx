export const RequestSingular = ({ req }) => {
    return (
        <div className='bg-primary w-[90vw] sm:w-[460px] lg:w-[700px] xl:w-[900px] rounded-lg px-4 py-4 mb-2 flex items-center justify-end'>
            <span className='text-white text-xl font-semibold mr-auto'>
                {req}
            </span>

            <div className=' justify-end items-end'>
                <button className='btn btn-base-100 mr-1'>Accept</button>
                <button className='btn btn-base-100'>Deny</button>
            </div>
        </div>
    );
};
