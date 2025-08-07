import { useEffect, useState } from "react"
import { GetGenders } from "../Services/GetGenders"
import { DietProps } from "../Models/DietProps"
import { GetDiets } from "../Services/GetDiets"

const useDiets = () => {
    const [diets, setDiets] = useState<DietProps[]>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchGenders = async () => {
            try {
                const diets = await GetDiets()
                setDiets(diets)
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchGenders()
    }, [])

    return {
        diets, loading, error
    }
}

export default useDiets