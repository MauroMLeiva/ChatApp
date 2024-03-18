import { AddContact } from './AddContact';
import { Conversations } from './Conversations';
import { LogoutBtn } from './LogoutBtn';
import { Requests } from './Requests';
import { Search } from './Search';

export const Sidebar = () => {
    return (
        <div className='bg-secondary border-r border-primary p-4 flex flex-col h-lvh overflow-hidden'>
            <Search />
            <div className='divider divider-primary px-3 mb-1' />
            <AddContact />
            <Requests />
            <div className='divider divider-primary px-3 mt-1' />
            <Conversations />
            <div className='divider divider-primary px-3 mt-1' />
            <LogoutBtn />
        </div>
    );
};
