import axios from 'axios';

axios.defaults.headers['Content-Type'] = "application/json";

if (localStorage.getItem('token')) {
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}

axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response && error.response.state >= 400 &&
        error.response.state < 500;

    if (!expectedErrors) {
        console.log('ارور در سمت سرور');
    }

    return Promise.reject(error);
})

export default {
    post: axios.post,
    get: axios.get,
    put: axios.put,
    delete: axios.delete,
}