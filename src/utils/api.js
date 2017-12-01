import axios from 'axios';
import { env } from '../config';
import { getFormdata } from './index';

export const http = axios.create({
        'develop': {
            'withCredentials': true,
            'headers': {
                'Content-Type': 'multipart/form-data',
            }
        },
        'production': {
            'headers': {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'multipart/form-data',
            },
        }
    }[env]
);

http.interceptors.request.use(config => {
    config.params = Object.assign(
        { timestamp: Date.now() },
        config.params || {}
    );
    return config;
});

http.interceptors.response.use(res => {
    let body = res.data;
    if (body.error) {
        return Promise.reject(body);
    }
    return body;
}, res => {
    return Promise.reject(res);
});

const request = (config) => {
    let { url, method, data, params } = config;
    return http.request({
        url,
        method: method || 'get',
        data: getFormdata(data),
        params: getFormdata(params, true)
    })
    .then(res => {
        // 通用数据处理
        return res;
    })
    .catch(body => {
        // 通用错误逻辑
        throw body;
    });

};

const api = {
    getPage (config = {}) {
        let { tip = '' } = config.params || {};
        return request({
            url: `/`,
            params: { tip },
        });
    },
};

export default api;
