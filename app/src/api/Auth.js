import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API_AUTH,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    }
});