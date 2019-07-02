import http from './http';

export interface RequestConfig {
    url: string;
    method?: string;
    data?: object;
    params?: object;
}

const request = (config: RequestConfig) => {
    let { url, method, data, params } = config;
    return http.request({
        url,
        method: method || 'get',
        data,
        params,
    })
    .then((res: any) => {
        // 通用数据处理
        if (res && res.error) {
            throw res;
        }
        return res;
    })
    .catch(res => {
        // 通用错误逻辑
        switch (res.error) {
            case 401:

                break;
            default:
                throw res;
        }
    });
};

const api = {
    taskSearch (config: {data?: object}) {
        return request({
            url: '/',
            method: 'get',
        });
    },
};

export default api;