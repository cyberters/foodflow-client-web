import AxiosService from "./AxiosService"

export const GetAuthUserData = async () => {
    try {
        const res = await AxiosService.get(`/User`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            }
        })

        return res.data
    } catch (error) {
        console.error('Error loading data:', error);
        throw error;
    }
}