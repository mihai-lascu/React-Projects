import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e4a98.firebaseio.com/'
});

export default instance;