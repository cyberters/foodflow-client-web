import AxiosService from "./AxiosService"

export const GetActiveMetrics = async () => {
    try {
        const res = await AxiosService.get(`/ActiveMetric`, {
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