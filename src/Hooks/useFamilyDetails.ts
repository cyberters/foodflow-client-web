import { useEffect, useState } from "react"
import { FamiliesProps } from "../Models/FamiliesProps"
import { GetFamilyDetails } from "../Services/GetFamilyDetails"

const useFamilyDetails = (familyId: number) => {
    const [familyDetails, setFamilyDetails] = useState<FamiliesProps | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchFamilyDetails = async () => {
            try {
                const data = await GetFamilyDetails({ familyId })
                setFamilyDetails(data)
            } catch (err) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchFamilyDetails()
    }, [familyId])

    return { familyDetails, loading, error }
}

export default useFamilyDetails
