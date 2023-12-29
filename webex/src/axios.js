import axios from "axios";

const customAxios = axios.create({
    baseURL: 'https://651be2c0194f77f2a5af056f.mockapi.io'
    // baseURL: 'http://localhost:8000'
})

export default customAxios