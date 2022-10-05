import $axios from 'axios'
import store from '../store/index'
const instance = $axios.create({
    baseURL: 'http://119.45.133.128:8098',
    timeout: 5000,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = store.getters.TOKEN
    if (token) config.headers.token = token
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    console.log(response, 'response');
    if (response.status < 400) {
        return response.data
    }
    // if (response.status <400) {
    //     return response.
    // }
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

const request = (options) => {
    options.method = options.method || 'get'
    if (options.method.toLocaleLowerCase() === 'get') {
        options.params = options.data || options.params
        delete options.data
    }
    return instance(options)
}

export default request