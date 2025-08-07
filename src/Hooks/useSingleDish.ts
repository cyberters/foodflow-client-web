import { useEffect, useState } from "react"
import { FoodListProps } from "../Models/FoodListProps"
import { GetSingleFoodList } from "../Services/GetSingleFoodList"
import { DishProps } from "../Models/DishProps"
import { GetSingleDish } from "../Services/GetSingleDish"

const useSingleDish = (dishId: number) => {
    const [singleDish, setSingleDish] = useState<DishProps>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchFoodLists = async () => {
            try {
                const data = await GetSingleDish(dishId)
                setSingleDish(data)
            } catch (err) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchFoodLists()
    }, [dishId])

    return { singleDish, loading, error }
}

export default useSingleDish
