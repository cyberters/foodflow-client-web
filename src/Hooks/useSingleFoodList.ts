import { useEffect, useState } from "react"
import { FoodListProps } from "../Models/FoodListProps"
import { GetSingleFoodList } from "../Services/GetSingleFoodList"

const useSingleFoodList = (familyId: number) => {
    const [singleFoodList, setSingleFoodList] = useState<FoodListProps>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchFoodLists = async () => {
            try {
                const data = await GetSingleFoodList(familyId)
                setSingleFoodList(data)
            } catch (err) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchFoodLists()
    }, [familyId])

    return { singleFoodList, loading, error }
}

export default useSingleFoodList
