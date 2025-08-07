import AxiosService from "./AxiosService"

export const GetSingleDish = async (dishId: number) => {
    try {
        const res = await AxiosService.get(`/Dish/${dishId}`, {
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