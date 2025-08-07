import { useEffect, useState } from "react"
import { UserData } from "../Models/UserData"
import { GetAuthUserData } from "../Services/GetAuthUserData"

const useAuthUser = () => {
    const [userData, setUserData] = useState<UserData>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const authUser = await GetAuthUserData()
                setUserData(authUser)
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    return {
        userData, loading, error
    }
}

export default useAuthUser