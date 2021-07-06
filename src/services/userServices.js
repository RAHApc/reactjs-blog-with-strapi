import http from './httpService';
import config from './config.json';

export const userLogin=(user)=>{
    return http.post(`${config.localApi}/auth/local`,JSON.stringify(user));
}