import { useEffect, useState } from "react"
import { ActiveMetricProps } from "../Models/ActiveMetricProps"
import { GetActiveMetrics } from "../Services/GetActiveMetrics"

const useActiveMetrics = () => {
    const [activeMetrics, setActiveMetrics] = useState<ActiveMetricProps[]>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchActiveMetric = async () => {
            try {
                const activeMetrics = await GetActiveMetrics()
                setActiveMetrics(activeMetrics)
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchActiveMetric()
    }, [])

    return {
        activeMetrics, loading, error
    }
}

export default useActiveMetrics