import { useEffect, useState } from "react";
import { GetFamilyMembers } from "../Services/GetFamilyMembers";
import { FamiliesProps } from "../Models/FamiliesProps";

const useLoadFamilies = () =>  {
    const [families, setFamilies] = useState<FamiliesProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const familiesData = await GetFamilyMembers();
                setFamilies(familiesData);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchToken();
    }, [])

    return { families, loading, error };
}

export default useLoadFamilies