import axios from 'axios';
const request = axios.create({
    timeout:5000,
    baseURL:"/",
    headers:{
        post:{"Content-Type":"application/x-www-form-urlencoded"}
    }
})
export default request;