import { useDispatch, useSelector } from 'react-redux';
import {
    checkingCredentials,
    clearErrorMessage,
    login,
    logout,
} from '../store/auth/authSlice';
import chatApi from '../api/chatApi';
import { logoutChat } from '../store/auth/chatSlice';
import { logoutUi } from '../store/uiSlice';

export const useAuthStore = () => {
    const { uid, status, username, profilePic, errorMessage } = useSelector(
        (state) => state.auth
    );
    const dispatch = useDispatch();

    const startLogin = async ({ username, password }) => {
        dispatch(checkingCredentials());

        try {
            const { data } = await chatApi.post('/auth/login', {
                username,
                password,
            });

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(
                login({
                    username: data.username,
                    uid: data.uid,
                    profilePic: data.profilePic,
                })
            );
        } catch (error) {
            dispatch(logout('Email o password incorrectos'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    };

    const startSignUp = async ({
        firstName,
        lastName,
        username,
        password,
        confirmPassword,
    }) => {
        dispatch(checkingCredentials());

        const newUsername = username.toLowerCase();

        try {
            const { data } = await chatApi.post('/auth/signup', {
                firstName,
                lastName,
                username: newUsername,
                password,
                confirmPassword,
            });

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(
                login({
                    username: data.username,
                    uid: data.uid,
                    profilePic: data.profilePic,
                })
            );
        } catch (error) {
            dispatch(logout(error.response.data?.msg || 'Invalid form'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    };

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(logout());

        try {
            const { data } = await chatApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({ username: data.username, uid: data.uid }));
        } catch (error) {
            localStorage.clear();
            dispatch(logout());
        }
    };

    const startLogout = () => {
        localStorage.clear();
        dispatch(logout());
        dispatch(logoutChat());
        dispatch(logoutUi());
    };

    return {
        // Props
        status,
        username,
        uid,
        errorMessage,
        profilePic,

        // Methods
        startLogin,
        startSignUp,
        checkAuthToken,
        startLogout,
    };
};
