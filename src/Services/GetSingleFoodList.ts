import AxiosService from "./AxiosService"

export const GetSingleFoodList = async (foodListId: number) => {
    try {
        const res = await AxiosService.get(`/FoodList/Single/${foodListId}`, {
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