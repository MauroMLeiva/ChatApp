export const ConversationSingular = () => {
    return (
        <>
            <div className='flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-primary text-black hover:text-white'>
                <div className='avatar mr-2 online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src='https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg'
                            alt='user profile picture'
                        />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <p className='font-bold'>Username</p>
                </div>
            </div>

            <div className='divider my-0 py-0 h-1' />
        </>
    );
};
