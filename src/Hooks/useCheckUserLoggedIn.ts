import { useEffect, useState } from "react"
import { InitApplication } from "../Services/InitApplication"
import { CheckTokenExpired } from "../Services/CheckTokenExpired"

const useCheckUserLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const userTokenExists = await InitApplication();
                if (userTokenExists && !CheckTokenExpired(userTokenExists))
                {
                    setIsLoggedIn(true)
                } else {
                    setIsLoggedIn(false)
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false)
            }
        }

        fetchToken()
    }, [])

    return {
        isLoggedIn, loading, error, setIsLoggedIn
    }
}

export default useCheckUserLoggedIn