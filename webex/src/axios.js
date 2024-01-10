import axios from "axios";

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const customAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API,
    headers: {
        'Authorization': `Bearer ${token}`
    },
 
})

export default customAxios