import { useEffect, useState } from "react"
import { FoodListProps } from "../Models/FoodListProps"
import { GetFoodListsOfFamily } from "../Services/GetFoodListsOfFamily"
import { GetCurrentShopList } from "../Services/GetCurrentShopList"
import { ShopListProps } from "../Models/ShopListProps"

const useSingleShopList = ({ foodListId } : GetCurrentShopList) => {
    const [shopListSingle, setShopListSingle] = useState<ShopListProps>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    const fetchFoodLists = async () => {
        try {
            const data = await GetCurrentShopList({ foodListId })
            setShopListSingle(data)
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchFoodLists()
    }, [foodListId])

    return { 
        shopListSingle, 
        loading, 
        error,
        refetch: fetchFoodLists
    }
}

export default useSingleShopList
