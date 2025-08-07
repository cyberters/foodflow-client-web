import { useEffect, useState } from "react"
import { GetActiveMetrics } from "../Services/GetActiveMetrics"
import { GenderProps } from "../Models/GenderProps"
import { GetGenders } from "../Services/GetGenders"

const useGenders = () => {
    const [genders, setGenders] = useState<GenderProps[]>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchGenders = async () => {
            try {
                const genders = await GetGenders()
                setGenders(genders)
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchGenders()
    }, [])

    return {
        genders, loading, error
    }
}

export default useGenders