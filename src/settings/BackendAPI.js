import request from 'axios';
import Environment from "./Environment";
class BackendAPI {

    static ApiURL = `${Environment.apiUrl}/scholarships`;

    static get = (path='') => {

        const apiCompletionPromise = request({
            method: 'get',
            url: `${BackendAPI.ApiURL}/${path}/`,
        });

        return apiCompletionPromise;
    };

    static post = (path, data) => {

        const apiCompletionPromise = request({
            method: 'post',
            data: data,
            url: `${BackendAPI.ApiURL}/${path}`,
        });

        return apiCompletionPromise
    }

    static generateQuiz = (title) => {
        BackendAPI.post('generate', {title: title})
    }
}

export default BackendAPI;
