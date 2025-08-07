export const InitApplication = async () => {
    try {
        const token = sessionStorage.getItem('authToken')
        return token
    } catch (error) {
        console.error('Error loading data:', error);
        throw error;
    }
}