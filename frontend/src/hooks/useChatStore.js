import { useDispatch, useSelector } from 'react-redux';
import chatApi from '../api/chatApi';
import {
    setActiveConversation,
    setContacts,
    setMessages,
    setRequests,
} from '../store/auth/chatSlice';
import toast from 'react-hot-toast';

export const useChatStore = () => {
    const { uid, username } = useSelector((state) => state.auth);
    const { messages, activeConversation, isChatSelected, requests } =
        useSelector((state) => state.chat);

    const dispatch = useDispatch();

    const getContacts = async () => {
        try {
            const { data } = await chatApi.get('users/');

            const contacts = [];

            data.map((element) => {
                contacts.push(element.username);
            });

            dispatch(setContacts(contacts));
        } catch (error) {
            console.log('Error getting contacts', error.message);
        }
    };

    const getRequests = async () => {
        try {
            const { data } = await chatApi.get('users/requests');

            dispatch(setRequests(data));
        } catch (error) {
            console.log('Error getting contacts', error.message);
        }
    };

    const getMessages = async (username) => {
        try {
            const { data } = await chatApi.get(`messages/${username}`);

            const messages = [];

            data.map((element) => {
                messages.push([
                    element.message,
                    element.senderId,
                    element.updatedAt,
                ]);
            });

            dispatch(setMessages(messages));
        } catch (error) {
            console.log('Error getting contacts', error.message);
        }
    };

    const selectConversation = async (username) => {
        getMessages(username);
        dispatch(setActiveConversation(username));
    };

    const sendMessage = async (username, message) => {
        try {
            await chatApi.post(`messages/send/${username}`, {
                message,
            });
            getMessages(username);
        } catch (error) {
            console.log(error.message);
            toast.error(error.response?.data?.error);
        }
    };

    const sendRequest = async (username) => {
        try {
            await chatApi.post(`users/add/${username}`);
            toast.success('Request sent!');
        } catch (error) {
            console.log(error.message);
            toast.error(error.response?.data?.error);
        }
    };

    const acceptRequest = async (username) => {
        try {
            await chatApi.post(`users/accept/${username}`);
            getContacts();
            getRequests();
            toast.success(`${username} added!`);
        } catch (error) {
            toast.error(error.response?.data?.error);
        }
    };

    const rejectRequest = async (username) => {
        try {
            await chatApi.post(`users/reject/${username}`);
            getRequests();
            toast.success(`${username} rejected`);
        } catch (error) {
            toast.error(error.response?.data?.error);
        }
    };

    return {
        // Props
        messages,
        activeConversation,
        isChatSelected,
        requests,

        // Methods
        getContacts,
        getMessages,
        selectConversation,
        sendMessage,
        getRequests,
        acceptRequest,
        rejectRequest,
        sendRequest,
    };
};
