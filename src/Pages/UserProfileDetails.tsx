import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardHeader from "../Components/CardHeader"
import CardSection from "../Components/CardSection"
import useAuthUser from "../Hooks/useAuthUser"
import { faFaceSmileWink, faGhost, faRocket, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import MainButton from "../Components/MainButton"
import ListBox from "../Components/ListBox"
import ListBoxItem from "../Components/ListBoxItem"
import User from "../Assets/Images/User.jpg";

const UserProfileDetails: React.FC = () => {
    const { userData, loading, error } = useAuthUser()

    return (
        <>
            {userData?.userProfile ? <CardHeader title="Panel użytkownika" subtitle="Uzupełnij swoje dane">
                    <FontAwesomeIcon icon={faUserEdit} className="me-auto h-8 text-brand-warm"/>
                </CardHeader> : <CardHeader title="Witaj w food.flow!" subtitle="Uzupełnij swoje dane">
                    <FontAwesomeIcon icon={faFaceSmileWink} className="me-auto h-8 text-brand-warm"/>
                </CardHeader>}
                {!userData?.userProfile ? <div className="flex flex-col space-y-2">
                    <ListBox>
                    <ListBoxItem label="Utwórz profil">
                        <div className="grid grid-cols-3 gap-4 pb-1">
                            <div className="col-span-2 flex flex-col space-y-4">
                                <h3 className="text-2xl">Witaj w food.flow – stwórz swój profil i działaj!</h3>
                                <span className="w-4/5">Niezmiernie cieszymy się, że postanowiłeś dołączyć do naszej społeczności pasjonatów samodzielnego gotowania! <br/><br/> Food.flow to miejsce, w którym spotykają się osoby szukające inspiracji, prostych i przejrzystych przepisów oraz sposobów na codzienne, zdrowe i pełne smaku posiłki. <br/><br/>Wierzymy, że gotowanie może być nie tylko obowiązkiem, ale też źródłem radości, kreatywności i satysfakcji – dlatego jesteśmy tutaj, aby dzielić się pomysłami, ułatwiać kulinarne eksperymenty i wspólnie odkrywać, jak wiele przyjemności może kryć się w domowej kuchni.</span>
                                {/* <div className="grid grid-cols-3 gap-4">
                                    <div className="rounded-md flex flex-col space-y-3 -rotate-[1.5deg] bg-primary px-3 py-2">
                                        <h6 className="bg-brand-warm me-auto rounded-md p-1">#1</h6>
                                        <h6>Zaproś domowników do wspólnego, pysznego planowania!</h6>
                                        <small>Planuj posiłki z domownikami</small>
                                    </div>
                                    <div className="rounded-md flex flex-col space-y-3 -rotate-[1.5deg] bg-primary px-3 py-2">
                                        <h6 className="bg-brand-warm me-auto rounded-md p-1">#2</h6>
                                        <h6>Planuj posiłki bez stresu – jadłospis dopasowany do Twoich dni!</h6>
                                        <small>Smaczne inspiracje na każdy dzień tygodnia</small>
                                    </div>
                                    <div className="rounded-md flex flex-col space-y-3 -rotate-[1.5deg] bg-primary px-3 py-2">
                                        <h6 className="bg-brand-warm me-auto rounded-md p-1">#3</h6>
                                        <h6>Zyskaj gotową listę zakupów i oszczędzaj czas w sklepie!</h6>
                                        <small>Planuj mądrze, kupuj szybko – gotowa lista w Twoim telefonie.</small>
                                    </div>
                                </div> */}
                                <div className="me-auto pt-2">
                                    <MainButton label='Utwórz profil' href='/user/create-profile' contrast={true}>
                                        <FontAwesomeIcon icon={faRocket}/>
                                    </MainButton>
                                </div>
                            </div>
                            {/* <div className="col-span-1">
                                <img src={foodFlow002} alt="" srcSet="" />
                            </div> */}
                        </div>
                    </ListBoxItem>
                </ListBox> 
                </div> : 
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-5 lg:col-span-2 flex flex-col space-y-4">
                        {/* <div
                            className="w-36 h-36 rounded-full border border-black border-solid bg-center bg-cover"
                            style={{ backgroundImage: `url(${User})` }}
                        />   */}
                        <ListBox>
                            <ListBoxItem label="Twoje imię" value={userData.userProfile.userFirstName}/>
                            <ListBoxItem label="Wiek" value={userData.userProfile.userAge}/>
                            <ListBoxItem label="Wzrost" value={`${userData.userProfile.userHeight} cm`}/>
                            <ListBoxItem label="Waga" value={`${userData.userProfile.userWeight} kg`}/>
                            <ListBoxItem label="Zapotrzebowanie kaloryczne" value={`${userData.userProfile.caloricDemandValue} kalorii`}/>
                            <ListBoxItem label="Aktywność fizyczna" value={`${userData.userProfile.activeMetric.activeMetricName}`}/>
                            <ListBoxItem label="Preferowana dieta" value={`${userData.userProfile.diet.dietName}`}/>
                        </ListBox>    
                    </div>
                    <div className="col-span-5 lg:col-span-3 flex flex-col space-y-4">
                        {/* <div
                            className="w-32 h-32 rounded-full border border-black border-solid bg-center bg-cover"
                            style={{ backgroundImage: `url(${User})` }}
                        />  */}
                        <ListBox>
                            <ListBoxItem label="Twoje aktywność fizyczna" value={userData.userProfile.activeMetric.activeMetricDescription}/>
                            <ListBoxItem label="Twoja dieta" value={userData.userProfile.diet.dietDescription}/>
                        </ListBox>  
                    </div>
                </div>}
        </>
    )
}

export default UserProfileDetails