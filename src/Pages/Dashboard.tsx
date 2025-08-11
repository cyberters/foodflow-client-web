import React, { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import PageLayout from "../Layouts/PageLayout";
import TableLayout from "../Components/TableLayout";
import useLoadFamilies from "../Hooks/useLoadFamilies";
import { spawn } from "child_process";
import MainButton from "../Components/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faArrowDown, faArrowRight, faArrowRightFromBracket, faArrowUp, faFaceSmileWink, faGhost, faListDots, faPeopleGroup, faRocket, faSearch, faTriangleExclamation, faWarning } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import Illustration001 from '../Assets/Images/Illustration001.svg'
import CardHeader from "../Components/CardHeader";
import CardSection from "../Components/CardSection";
import useAuthUser from "../Hooks/useAuthUser";
import ListBox from "../Components/ListBox";
import ListBoxItem from "../Components/ListBoxItem";
import DashboardLayout from "../Layouts/DashboardLayout";
import Breadcrumbs from "../Components/Breadcrumbs";
import Footer from "../Components/Footer";

const Logout = () => {
  sessionStorage.removeItem('authToken')
  window.location.replace('/')
}

const Dashboard: React.FC = () => {
    const { families, loading, error } = useLoadFamilies()
    const { userData, loading: loadingUserDetails, error: errorUserDetails } = useAuthUser()
    const [showProfile, setShowProfile] = useState<boolean>(false)

    return (
        <MainLayout>
            <DashboardLayout>
                <div className="grid grid-cols-9 gap-4 md:gap-8 flex-grow h-full">
                    <div className="col-span-9 md:col-span-2 flex flex-col h-full order-2 md:order-1">
                        <div className="flex flex-col space-y-4 mt-auto">
                            <nav className="bg-brand-warm rounded-md px-4 py-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col space-y-1">
                                        <h4 className="text-xl font-bold">food.flow</h4>
                                    </div>
                                    <div className="ps-4 my-auto flex"><FontAwesomeIcon icon={faArrowRightFromBracket} className="w-6 h-6 text-primary my-auto" onClick={Logout}></FontAwesomeIcon></div>
                                </div>
                            </nav>
                        <div className="hidden md:block">
                            <CardSection>
                                <div className="flex flex-row" onClick={() => showProfile ? setShowProfile(false) : setShowProfile(true)}>
                                <CardHeader title={`Witaj, ${userData?.userProfile ? `${userData?.userProfile.userFirstName}` : `@${userData?.userName}` }`} subtitle={showProfile ? `Kliknij, aby schować profil` : `Kliknij, aby rozwinąć profil`}>
                                    {userData?.userProfile ? <FontAwesomeIcon icon={faFaceSmileWink} className="me-auto h-8 text-brand-warm"/> :
                                    <FontAwesomeIcon icon={faGhost} className="h-8 text-brand-warm animate-bounce-slow me-auto"/>}
                                </CardHeader>
                                <FontAwesomeIcon className="mb-auto ms-auto h-4 mt-1" icon={showProfile ? faArrowUp : faArrowDown}/>
                                </div>
                                <div className="flex flex-col space-y-2 mt-2">
                                    <div></div>
                                    <div className={`${showProfile ? `block` : `hidden`}`}>{userData?.userProfile ? 
                                    <ListBox>
                                        <ListBoxItem label="Twoje imię" value={userData.userProfile.userFirstName}/>
                                        <ListBoxItem label="Wiek" value={userData.userProfile.userAge}/>
                                        <ListBoxItem label="Wzrost" value={`${userData.userProfile.userHeight} cm`}/>
                                        <ListBoxItem label="Waga" value={`${userData.userProfile.userWeight} kg`}/>
                                        <ListBoxItem label="Zapotrzebowanie kaloryczne" value={`${userData.userProfile.caloricDemandValue} kalorii`}/>
                                        <ListBoxItem label="Aktywność fizyczna" value={`${userData.userProfile.activeMetric.activeMetricName}`}/>
                                        <ListBoxItem label="Preferowana dieta" value={`${userData.userProfile.diet.dietName}`}/>
                                    </ListBox>
                                    : 
                                    <div className="flex flex-col space-y-1">
                                        <ListBox>
                                            <ListBoxItem label="Profil prawie gotowy!">
                                                <div className="flex flex-row space-x-3">
                                                    <span>Podziel się swoimi nawykami – pomożemy Ci lepiej planować posiłki!</span>
                                                </div>
                                            </ListBoxItem>
                                        </ListBox>
                                    </div>}</div>
                                    <div className="flex flex-row space-x-2">
                                        {!userData?.userProfile ? <MainButton label='Utwórz profil' href='/dashboard/user/create-profile'>
                                            <FontAwesomeIcon icon={faRocket}/>
                                        </MainButton> : <MainButton label='Konto użytkownika' href='/dashboard/user/details'>
                                            <FontAwesomeIcon icon={faArrowRight}/>
                                        </MainButton>}    
                                    </div>    
                                </div>
                            </CardSection>
                        </div>
                        <div className="hidden border border-black border-solid bg-primary rounded-md px-4 py-3 md:flex flex-col gap-4 h-full">
                            <CardHeader subtitle="Twoje gospodarstwa domowe">
                                <FontAwesomeIcon icon={faPeopleGroup} className="me-auto h-8 text-brand-warm"/>
                            </CardHeader>
                            {(families) ? 
                                <div className="flex flex-col space-y-3">
                                    <ListBox>
                                        {families.length > 0 ? families.map((item) => (
                                            <Link to={`family/${item.familyId}`} className="hover:bg-primary rounded-md transition-all hover:px-3 flex flex-row">
                                                <ListBoxItem value={item.familyName} key={item.familyId}/>
                                                <FontAwesomeIcon icon={faListDots} className="ms-auto my-auto"/>
                                            </Link>
                                        )) : <ListBoxItem label="Pusta lista">
                                                <span>Wygląda na to, że jeszcze nie masz swojej kulinarnej drużyny!</span>
                                            </ListBoxItem>}
                                    </ListBox>
                                    <div className="flex flex-row space-x-3">
                                        <MainButton label='Znajdź grupę' href='/dashboard/search-family'>
                                            <FontAwesomeIcon icon={faSearch}/>
                                        </MainButton>  
                                        <MainButton label='Utwórz nową' href='/dashboard/create-family'>
                                            <FontAwesomeIcon icon={faAdd}/>
                                        </MainButton>  
                                    </div>
                                </div> 
                            : <div className="flex flex-col space-y-2 mt-2">
                                <FontAwesomeIcon icon={faGhost} className="me-auto h-8 text-brand-warm animate-bounce-slow"/>
                                <div></div>
                                <span>Nie należysz jeszcze do żadnej grupy</span>
                                <div className="flex flex-row space-x-2">
                                    {/* <MainButton label='Poznaj nas' href='#about-us'>
                                        <FontAwesomeIcon icon={faArrowDown}/>
                                    </MainButton> */}
                                    <MainButton label='Utwórz' href='/dashboard/create-family'>
                                        <FontAwesomeIcon icon={faAdd}/>
                                    </MainButton>    
                                </div>    
                            </div>}
                        </div>
                        <div className="py-8 md:flex mx-auto hidden">
                            <img src={Illustration001} alt="Girl with Shopping Bag and Logo" srcSet="" className='mx-auto h-[13rem]'/>
                        </div>
                        </div>
                        <div className="hidden md:flex mt-auto">
                            <Footer></Footer>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 col-span-9 md:col-span-7 border border-black border-solid bg-primary rounded-md px-4 py-3 flex flex-col gap-4 flex-grow overflow-y-scroll h-full">
                        <Breadcrumbs />
                        <Outlet/>
                    </div>
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}

export default Dashboard