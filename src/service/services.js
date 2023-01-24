import axios from "axios";
import * as Constant from '../constant';

//posts

const getPosts = () => {
    return axios.get(`${Constant.SERVICE_URL}/api/post`)
        .then(response => {
            return response;
        }).catch(err => {
            console.log(err)
        })
};

const addPost = (post) => {
    let data = JSON.stringify(post);

    let config = {
        method: 'post',
        url: 'http://localhost:8080/api/post/save',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
};

const getPost = (id) => {
    return axios.get(`${Constant.SERVICE_URL}/api/post/${id}`)
        .then(response => {
            return response;
        }).catch(err => {
            console.log(err)
        })
};

//comments
const getComments = (id) => {
    return axios.get(`${Constant.SERVICE_URL}/api/comment/${id}`)
        .then(response => {
            return response;
        }).catch(err => {
            console.log(err)
        })
};

const addComment = (comment) => {
    let data = JSON.stringify(comment);

    let config = {
        method: 'post',
        url: 'http://localhost:8080/api/comment/save',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
};

//user
const getUser = (id) => {
    return axios.get(`${Constant.SERVICE_URL}/api/user/${id}`)
        .then(response => {
            return response;
        }).catch(err => {
            console.log(err)
        })
};


export default {
    getPosts,
    addPost,
    getPost,
    getComments,
    addComment,
    getUser
}