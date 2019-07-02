import axios from 'axios';

const http = axios.create({
  timeout: 5000,

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
      return response.data;
    })
    .catch(err => {
      // 统一错误处理
      throw err; 
    });
};

const api = {
  getUserInfo(params = {}) {
    return request({
      url: '/user/info',
      params,
    });
  },
};

export default api;