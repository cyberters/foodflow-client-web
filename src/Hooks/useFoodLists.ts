import { useEffect, useState } from "react"
import { FoodListProps } from "../Models/FoodListProps"
import { GetFoodListsOfFamily } from "../Services/GetFoodListsOfFamily"

const useFoodLists = (familyId: number) => {
    const [foodListsItems, setFoodListsItems] = useState<FoodListProps[]>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchFoodLists = async () => {
            try {
                const data = await GetFoodListsOfFamily(familyId)
                setFoodListsItems(data)
            } catch (err) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchFoodLists()
    }, [familyId])

    return { foodListsItems, loading, error }
}

export default useFoodLists
