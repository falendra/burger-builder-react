import axios from 'axios';

const instance = axios.create({

    baseURL : 'https://burger-builder-falendra.firebaseio.com/'
});


export default instance;

