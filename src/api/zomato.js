import axios from 'axios';

export default axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key': 'c729f0cd7edf742479a887e542da44aa'
    }
});