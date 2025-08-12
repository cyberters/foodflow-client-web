import React, { useEffect, useState } from "react";
import ListBox from "../Components/ListBox";
import ListBoxItem from "../Components/ListBoxItem";
import CardHeader from "../Components/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useFamilyDetails from "../Hooks/useFamilyDetails";
import { FormatTimeStamp } from "../Services/FormatTimeStamp";
import AxiosService from "../Services/AxiosService";
import FindUserForm from "../Components/FindUserForm";
import FoodListForm from "../Components/FoodListForm";
import { FoodListProps } from "../Models/FoodListProps";
import GridTemplate from "../Components/GridTemplate";
import DishTemplate from "../Components/DishTemplate";
import FoodListCreateForm from "../Components/FoodListCreateForm";
import useFoodLists from "../Hooks/useFoodLists";
import LinkBoxItem from "../Components/LinkBoxItem";
import FoodListsShow from "../Components/FoodListsShow";

const SingleFamily: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const familyId = id ? parseInt(id, 10) : NaN;

    const { familyDetails, loading, error } = useFamilyDetails(familyId);
    const { foodListsItems, loading: loadingFoodLists, error: errorFoodLists } = useFoodLists(familyId);
    const [familyData, setFamilyData] = useState(familyDetails);
    const [loadingForm, setLoadingForm] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<boolean>(false);

    const [foodLists, setFoodLists] = useState<FoodListProps[]>()

    useEffect(() => {
        if (familyDetails) {
            setFamilyData(familyDetails);
        }
    }, [familyDetails]);

    const saveFoodList = async (data: any) => {
        setLoadingForm(true);
        try {
            await AxiosService.post(
                `/FoodList/Save/${id}`,
                {
                    foodListName: data.foodListName,
                    foodListDescription: data.foodListDescription
                },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
                    },
                }
            );
            setSuccess(true);
            window.location.replace(`/dashboard/family/${id}`)
        } catch (e) {
            console.error(e);
            setErrorMsg(true);
        } finally {
            setLoadingForm(false);
        }
    }

    const onSubmitFoodList = async (data: any) => {
        console.log(data)
        var days = data.dateEnd - data.dateStart
        var daysResult = days/86400000
        setLoadingForm(true);
        try {
            const res = await AxiosService.get(
                `/FoodList/PlanFor/${id}?days=${daysResult}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
                    }
                }
            );

            setFoodLists(res.data);
            setSuccess(true);
        } catch (e) {
            console.error(e);
            setErrorMsg(true);
        } finally {
            setLoadingForm(false);
        }
    } 

    const onSubmit = async (data: any) => {
        setLoadingForm(true);
        try {
            await AxiosService.post(
                `/FamilyMember/New/${id}`,
                JSON.stringify(data.userEmail),
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
                    },
                }
            );

            const updated = await AxiosService.get(`/Family/${id}`);
            setFamilyData(updated.data);
            setSuccess(true);
        } catch (e) {
            console.error(e);
            setErrorMsg(true);
        } finally {
            setLoadingForm(false);
        }
    };

    if (isNaN(familyId)) {
        return <div className="text-red-600">Nieprawidłowy identyfikator rodziny.</div>;
    }

    if (loading) {
        return <div className="text-gray-600">Ładowanie danych...</div>;
    }

    if (error || !familyData) {
        return <div className="text-red-600">Wystąpił błąd podczas ładowania danych.</div>;
    }

    return (
        <div className="flex flex-col h-max space-y-4 overflow-y-auto">
            <CardHeader title={familyData.familyName} subtitle="Twoja grupa">
                <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="me-auto h-8 text-brand-warm"
                />
            </CardHeader>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 lg:col-span-1 space-y-3">
                    <ListBox>
                        <ListBoxItem label="Wygeneruj jadłospis">
                            <div className="pt-1"></div>
                            <FoodListForm onSubmit={onSubmitFoodList}/>
                        </ListBoxItem>
                        {(foodLists && foodLists.length > 0) && <ListBoxItem label="Zapisz jadłospis">
                            <div className="pt-1"></div>
                            <FoodListCreateForm onSubmit={saveFoodList}/>
                        </ListBoxItem>}
                    </ListBox>
                </div>          
                {(foodLists && foodLists.length > 0) ? <div className="col-span-3 lg:col-span-2">   
                    <FoodListsShow foodLists={foodLists}/>
                </div> : <div className="col-span-3 lg:col-span-2">
                    <ListBox>
                        <ListBoxItem label="Wygeneruj jadłospis">
                            <h6>Nagłówek</h6>
                            <span>opis</span>
                        </ListBoxItem>
                    </ListBox>
                </div>}
                 {(foodListsItems && foodListsItems.length > 0) && <div className="col-span-3">
                    <ListBox>
                        <ListBoxItem label={`Zapisane jadłospisy`}></ListBoxItem>
                        {foodListsItems.map((item) => (
                            <LinkBoxItem linkHref={`/dashboard/foodList/${item.foodListId}`}>
                                <ListBoxItem label={`Ilość dni: ${item.days.length}`} key={item.foodListId}>
                                    <div>{item.foodListName}</div>
                                    {/* <small>Utworzono: {FormatTimeStamp(item.familyCreatedAt)}</small> */}
                                </ListBoxItem>
                                <FontAwesomeIcon icon={faListDots} className="ms-auto my-auto"/>
                            </LinkBoxItem>
                        ))}
                    </ListBox>
                </div>}
            </div>


            <ListBox>
                <ListBoxItem label="Utworzono dnia">
                    <div>{FormatTimeStamp(familyData.familyCreatedAt)}</div>
                </ListBoxItem>
                <ListBoxItem label="Zapotrzebowanie kaloryczne rodziny">
                    <div>{`${familyData.familyAvgCaloricDemand} kalorii`}</div>
                </ListBoxItem>
                <ListBoxItem label="Członkowie">
                    <table className="table-auto w-full text-sm mt-1">
                        <thead>
                            <tr className="text-center font-semibold border-b">
                                <th>Imię</th>
                                <th>Nazwa użytkownika</th>
                                <th>Wiek</th>
                                <th>Wzrost</th>
                                <th>Waga</th>
                                <th>Aktywność fizyczna</th>
                            </tr>
                        </thead>
                        <tbody>
                            {familyData.familyMembers?.map((item) => (
                                <tr key={item.familyMemberId}>
                                    <td>{item.user.userProfile?.userFirstName}</td>
                                    <td>@{item.user.userName}</td>
                                    <td>{item.user.userProfile?.userAge} lat</td>
                                    <td>{item.user.userProfile?.userHeight} cm</td>
                                    <td>{item.user.userProfile?.userWeight} kg</td>
                                    <td>{item.user.userProfile?.activeMetric?.activeMetricName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ListBoxItem>
                <ListBoxItem label="Dodaj użytkownika">
                    <FindUserForm onSubmit={onSubmit} />
                    {success && <div className="text-green-600">✅ Dodano użytkownika do grupy</div>}
                    {errorMsg && <div className="text-red-600">❌ Błąd w trakcie dodawania</div>}
                </ListBoxItem>
            </ListBox>
        </div>
    );
};

export default SingleFamily;
