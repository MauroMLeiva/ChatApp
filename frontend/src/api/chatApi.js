import axios from 'axios';

const api_url = 'https://chatapp-c0vh.onrender.com/api';

const chatApi = axios.create({
    baseURL: api_url,
});

chatApi.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    };

    return config;
});

export default chatApi;
