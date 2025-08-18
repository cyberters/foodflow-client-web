import axios from "axios";

const LOCAL_URL = `http://localhost:5179`
const PROD_URL = `https://foodflowapi-h9bngtcucacsddc2.polandcentral-01.azurewebsites.net`

const AxiosService = axios.create({
    baseURL: `${LOCAL_URL}/api`,
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