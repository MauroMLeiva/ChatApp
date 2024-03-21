import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        firstName: null,
        lastName: null,
        username: null,
        profilePic: null,
        requests: [],
        contacts: [],
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.username = payload.username;
            state.lastName = payload.lastName;
            state.firstName = payload.firstName;
            state.profilePic = payload.profilePic;
            state.requests = payload.requests;
            state.contacts = payload.contacts;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.username = null;
            state.firstName = null;
            state.lastName = null;
            state.profilePic = null;
            state.requests = [];
            state.contacts = [];
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
