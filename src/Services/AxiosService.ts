import axios from "axios";

const AxiosService = axios.create({
    baseURL: `http://localhost:5179/api`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

AxiosService.interceptors.response.use(
    (res) => res,
    (e) => {
        return Promise.reject(e)
    }
)

export default AxiosService