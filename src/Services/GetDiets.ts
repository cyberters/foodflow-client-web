import AxiosService from "./AxiosService"

export const GetDiets = async () => {
    try {
        const res = await AxiosService.get(`/Diet`, {
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