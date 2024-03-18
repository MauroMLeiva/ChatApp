export const MessageSingular = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        src='https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg'
                        alt='user profile picture'
                    />
                </div>
            </div>

            <div className={`chat-bubble text-white bg-primary break-words`}>
                This is a long message, which I am using to see how the text
                overflows and if it switches to a new line. It should do so
                automatically. Why am I not just using lorem ipsum, I have no
                ideaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            </div>
            <div className='chat-footer opacity-80 text-xs flex gap-1 items-center text-black'>
                14:37
            </div>
        </div>
    );
};
