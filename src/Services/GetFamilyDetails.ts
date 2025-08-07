import AxiosService from "./AxiosService"

export interface GetFamilyDetailsProps {
    familyId: number
}

export const GetFamilyDetails = async ({ familyId }: GetFamilyDetailsProps) => {
    try {
        const res = await AxiosService.get(`/Family/${familyId}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            }
        })
        return res.data
    } catch (error) {
        console.error('Error loading data:', error)
        throw error
    }
}
