import axios from 'axios';

const http = axios.create({
    timeout: 5000
});
//
// http.interceptors.request.use(config => {
//     config.params = Object.assign({
//     }, config.params || {});
//     return config;
// });
//
// http.interceptors.response.use((res: Response) => {
//     return res;
// }, err => Promise.reject(err));

export default http;