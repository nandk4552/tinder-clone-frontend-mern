import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:8001'
    baseURL: 'https://tinder-clone-backend-mern.onrender.com'
});
export default instance;