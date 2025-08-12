import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardHeader from "../Components/CardHeader"
import { faListDots, faSearch } from "@fortawesome/free-solid-svg-icons"
import ListBox from "../Components/ListBox"
import ListBoxItem from "../Components/ListBoxItem"
import { useState } from "react"
import AxiosService from "../Services/AxiosService"
import FindFamilyForm from "../Components/FindFamilyForm"
import { FamiliesProps } from "../Models/FamiliesProps"
import { FormatTimeStamp } from "../Services/FormatTimeStamp"
import LinkBoxItem from "../Components/LinkBoxItem"

const SearchFamily: React.FC = () => {
    const [families, setFamilies] = useState<FamiliesProps[]>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const onSubmit = async (data: any) => {
        await AxiosService.get(`/Family/Find/${data.familyName}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            }
        })
        .then((res) => {
            setFamilies(res.data)
        })
        .catch((e) => {
            console.log(e)
        })
        .finally(() => {
            setLoading(false)
        })
    }
    
    return (
        <div className="flex-grow space-y-4">
            <CardHeader title="Dołącz do grupy" subtitle="Wyszukiwanie">
                <FontAwesomeIcon icon={faSearch} className="me-auto h-8 text-brand-warm"/>
            </CardHeader>
            <ListBox>
                <ListBoxItem label="Znajdź grupę"/>
                <ListBoxItem>
                    <FindFamilyForm onSubmit={onSubmit}></FindFamilyForm>
                </ListBoxItem>
            </ListBox>
            {(families && families.length > 0) && 
            <ListBox>
                {families.map((item) => (
                    <LinkBoxItem linkHref={`/dashboard/family/${item.familyId}`}>
                        <ListBoxItem label={`Liczba członków: ${item.familyCount}`} key={item.familyId}>
                            <div>{item.familyName}</div>
                            <small>Utworzono: {FormatTimeStamp(item.familyCreatedAt)}</small>
                        </ListBoxItem>
                        <FontAwesomeIcon icon={faListDots} className="ms-auto my-auto"/>
                    </LinkBoxItem>
                ))}
            </ListBox>}
        </div>
    )
}

export default SearchFamily