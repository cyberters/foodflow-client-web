import AxiosService from "./AxiosService"

export const GetFoodListsOfFamily = async (familyId: number) => {
    try {
        const res = await AxiosService.get(`/FoodList/List/Family/${familyId}`, {
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