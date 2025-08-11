import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardHeader from "../Components/CardHeader"
import MainLayout from "../Layouts/MainLayout"
import PageLayout from "../Layouts/PageLayout"
import { faFaceSmileWink, faHouse, faRocket, faUser } from "@fortawesome/free-solid-svg-icons"
import ListBox from "../Components/ListBox"
import ListBoxItem from "../Components/ListBoxItem"
import useAuthUser from "../Hooks/useAuthUser"
import foodFlow002 from '../Assets/Images/food-flow002.png'
import MainButton from "../Components/MainButton"
import NavbarLink from "../Components/NavbarLink"
import AutoSlider from "../Components/AutoSlider"

const DashboardMain: React.FC = () => {
    const { userData, loading: loadingUserDetails, error: errorUserDetails } = useAuthUser()
    return (
        <div className="space-y-4">
            <CardHeader title={userData ? `Gotowy na nowe smaki?` : `Miło Cię widzieć!`} subtitle="Dashboard">
                <FontAwesomeIcon icon={faHouse} className="me-auto h-6 md:h-8 text-brand-warm"/>
            </CardHeader>
            {userData?.userProfile ? <>
                <ListBox>
                    <ListBoxItem label="Nie masz pomysłu co ugotować?">
                        <div className="flex flex-col space-y-1 pt-1 pb-3">
                            <h6>Planowanie zostaw nam!</h6>
                            <span className="text-sm">test</span>
                        </div>
                        <AutoSlider/>
                        <div className="py-2"></div>
                        <NavbarLink href="/sign-in" label="Zaczynamy!" />
                    </ListBoxItem>
                </ListBox>
                {/* <ListBox>
                    <ListBoxItem label="Propozycje dnia">
                        <div>test</div>
                    </ListBoxItem>
                    <ListBoxItem label="Twoje listy zakupów">
                        <div>test</div>
                    </ListBoxItem>
                    <ListBoxItem label="Twoje jadłospisy">
                        <div>test</div>
                    </ListBoxItem>
                </ListBox> */}
            </> : <ListBox>
                    <ListBoxItem label="Utwórz profil">
                        <div className="grid grid-cols-3 gap-4 pb-1">
                            <div className="col-span-2 flex flex-col space-y-4">
                                <h3 className="text-2xl">Witaj w food.flow – stwórz swój profil i działaj!</h3>
                                <span className="w-4/5">Niezmiernie cieszymy się, że postanowiłeś dołączyć do naszej społeczności pasjonatów samodzielnego gotowania! <br/><br/> Food.flow to miejsce, w którym spotykają się osoby szukające inspiracji, prostych i przejrzystych przepisów oraz sposobów na codzienne, zdrowe i pełne smaku posiłki. <br/><br/>Wierzymy, że gotowanie może być nie tylko obowiązkiem, ale też źródłem radości, kreatywności i satysfakcji – dlatego jesteśmy tutaj, aby dzielić się pomysłami, ułatwiać kulinarne eksperymenty i wspólnie odkrywać, jak wiele przyjemności może kryć się w domowej kuchni.</span>
                                <div className="grid grid-cols-3 gap-4">
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
                                </div>
                                <div className="me-auto pt-2">
                                    <MainButton label='Utwórz profil' href='/dashboard/user/create-profile' contrast={true}>
                                        <FontAwesomeIcon icon={faRocket}/>
                                    </MainButton>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={foodFlow002} alt="" srcSet="" />
                            </div>
                        </div>
                    </ListBoxItem>
                </ListBox>}
        </div>
    )
}

export default DashboardMain