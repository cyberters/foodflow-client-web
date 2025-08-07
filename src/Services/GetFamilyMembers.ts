import AxiosService from "./AxiosService";

export const GetFamilyMembers = async () => {
    try {
        const res = await AxiosService.get(`/Family/MyGroups`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            }
        })
        return res.data
    } catch (error) {
        console.error('Error loading data:', error);
        throw error;
    }
}