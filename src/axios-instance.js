import axios from 'axios';

var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    config => {
        const token = window.accessToken ? window.accessToken : 'token';
        const isTokenExpired = window.isTokenExpired;
        config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        config.headers['Access-Control-Allow-Origin'] = '*'
        return config;
    },
    error => {
        Promise.reject(error)
    });

axiosInstance.interceptors.response.use((response) => {
    return response
}, function (error) {
    return Promise.reject(error);
});
export default axiosInstance;