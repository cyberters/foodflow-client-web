import AxiosService from "./AxiosService"

export interface GetCurrentShopList {
    foodListId: number
}

export const GetCurrentShopList = async ({ foodListId }: GetCurrentShopList) => {
    try {
        const res = await AxiosService.get(`/ShopList/Single/FoodList/${foodListId}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            }
        })
        return res.data
    } catch (error) {
        console.error('Error loading data:', error)
        throw error
    }
}
