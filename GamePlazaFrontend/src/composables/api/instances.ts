import axios, {AxiosInstance} from 'axios';

const apiRoot: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5287/api/',
});

export {apiRoot};