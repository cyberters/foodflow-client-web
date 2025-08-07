import AxiosService from "./AxiosService"

export const GetGenders = async () => {
    try {
        const res = await AxiosService.get(`/Gender`, {
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