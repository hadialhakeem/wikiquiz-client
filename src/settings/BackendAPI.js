import request from 'axios';
import Environment from "./Environment";

class BackendAPI {

    static ApiURL = Environment.apiUrl;

    static get = (path='') => {

        return request({
            method: 'get',
            url: `${BackendAPI.ApiURL}/${path}/`,
        });
    };

    static post = (path, data) => {

        return request({
            method: 'post',
            data: data,
            url: `${BackendAPI.ApiURL}/${path}`,
        })
    }

    static generateQuiz = (title) => {
        BackendAPI.post('generate', {title: title})
    }
}

export default BackendAPI;
