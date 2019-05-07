import axios from 'axios';

const http = axios.create({
  timeout: 5000,
  baseURL: process.env.NODE_ENV === 'development'
    ? `http://localhost:${PORT}`
    : `/api`,
});

const request = ({ url, method = 'get', data, params } = {}) => {
  return http
    .request({ 
      url, 
      method, 
      data, 
      params,
     })
    .then((response) => {
      // 统一数据处理
      return response;
    })
    .catch(err => {
      // 统一错误处理
      throw err; 
    });
};

const api = {
  test(params = {}) {
    return request({
      url: '/',
      params,
    });
  },
};

export default api;