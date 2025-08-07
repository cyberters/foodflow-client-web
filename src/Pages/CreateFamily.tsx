import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardHeader from "../Components/CardHeader"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import CreateFamilyForm, { CreateFamilyInputProps } from "../Components/CreateFamilyForm"
import { SubmitHandler } from "react-hook-form"
import AxiosService from "../Services/AxiosService"
import ListBox from "../Components/ListBox"
import foodFlow003 from '../Assets/Images/food-flow003.png'
import ListBoxItem from "../Components/ListBoxItem"

const CreateFamily: React.FC = () => {
    const onSubmit: SubmitHandler<CreateFamilyInputProps> = async (data) => {
        await AxiosService.post(
            `/Family/Create`,
            {
                FamilyName: data.FamilyName
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
                }
            }
        ).then((res) => {
            window.location.replace('/dashboard')
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <div className="flex-grow space-y-4">
            <CardHeader title="Stwórz swoją grupę" subtitle="Rodzina">
                <FontAwesomeIcon icon={faFile} className="me-auto h-8 text-brand-warm"/>
            </CardHeader>
            <div className="grid grid-cols-2 gap-4">
                <ListBox>
                    <ListBoxItem label="Dodaj grupę">
                        <div className="pt-1"></div>
                        <CreateFamilyForm onSubmit={onSubmit}/>
                    </ListBoxItem>
                </ListBox>
                <ListBox>
                    <ListBoxItem label="Dodaj grupę">
                        <h6 className="text-lg">Zaplanuj posiłki razem z domownikami – wszystko w jednym miejscu!</h6>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-sm col-span-2">
                                <p>
                                    Zorganizuj swoje gospodarstwo domowe w jednym miejscu!
                                <br /><br />
                                    Tworząc grupę, możesz zaprosić domowników, partnera czy współlokatorów i wspólnie:
                                </p>
                                <ul className="mt-4 space-y-2 list-none">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✅</span>
                                    <span>Planować posiłki na cały tydzień</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✅</span>
                                    <span>Dzielić się jadłospisem i ulubionymi przepisami</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✅</span>
                                    <span>Automatycznie generować wspólne listy zakupów</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✅</span>
                                    <span>Dbać o różne potrzeby i preferencje żywieniowe każdej osoby</span>
                                </li>
                                </ul>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <img src={foodFlow003} alt="" className="max-w-full h-auto object-contain" />
                            </div>
                        </div>
                    </ListBoxItem>
                </ListBox>
            </div>
        </div>
    )
}

export default CreateFamily