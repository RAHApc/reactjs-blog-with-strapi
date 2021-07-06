import http from './httpService';
import config from './config.json';

export const getPosts = () => {
    return http.get(`${config.localApi}/posts`);
}

export const addPost = (post)=>{
    return http.post(`${config.localApi}/posts`,post);
}

export const deletePost = (postId) => {
    return http.delete(`${config.localApi}/posts/${postId}`);
}
