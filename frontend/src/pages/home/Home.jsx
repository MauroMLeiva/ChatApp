import { MessageContainer } from '../../components/messages/MessageContainer';
import { RequestList } from '../../components/request-list/RequestList';
import { Sidebar } from '../../components/sidebar/Sidebar';

export const Home = () => {
    // Global state "SidebarIsOpen", View: "Messages"/"Requests"
    const open = true;
    const view = 'requests';

    return (
        <div className='drawer md:drawer-open'>
            <input
                id='drawer-sidebar'
                type='checkbox'
                className='drawer-toggle'
            />
            <div className='drawer-content flex overflow-hidden bg-base-100'>
                {view == 'messages' ? <MessageContainer /> : <RequestList />}
            </div>

            <div className='drawer-side'>
                <label
                    htmlFor='drawer-sidebar'
                    aria-label='close sidebar'
                    className='drawer-overlay'
                ></label>
                <Sidebar />
            </div>
        </div>
    );
};

{
    /* <div className='flex w-11/12 h-[94%] rounded-lg overflow-hidden bg-secondary bg-clip-padding'>
    <div className={open ? 'flex' : 'hidden'}>
        <Sidebar />
    </div>

    {view == 'messages' ? <MessageContainer /> : <></>}
</div>; */
}
