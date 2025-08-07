import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardHeader from "../Components/CardHeader"
import CardSection from "../Components/CardSection"
import MainLayout from "../Layouts/MainLayout"
import PageLayout from "../Layouts/PageLayout"
import { faFaceSmileWink, faTruckLoading, faUser } from "@fortawesome/free-solid-svg-icons"
import useAuthUser from "../Hooks/useAuthUser"
import { Outlet } from "react-router-dom"
import ListBox from "../Components/ListBox"
import ListBoxItem from "../Components/ListBoxItem"
import { FormatTimeStamp } from "../Services/FormatTimeStamp"

const UserProfile: React.FC = () => {
    const { userData, loading, error } = useAuthUser()

    return (
        <MainLayout>
            <PageLayout>
                <div className="flex-grow grid grid-cols-9 gap-8">
                    <div className="col-span-2">
                        <CardSection>
                            {loading && <CardHeader subtitle="Ładowanie...">
                                <FontAwesomeIcon icon={faTruckLoading} className="me-auto h-8 text-brand-warm"/>
                            </CardHeader>}
                            {userData && <CardHeader title={`${userData.userName}`} subtitle="Twój profil">
                                <FontAwesomeIcon icon={faUser} className="me-auto h-8 text-brand-warm"/>
                            </CardHeader>}
                            <div className="py-2"></div>
                            {userData && <ListBox>
                                    <ListBoxItem label="Adres email" value={userData.userEmail}/>
                                    <ListBoxItem label="Zarejestrowano dnia" value={FormatTimeStamp(userData.createdAt)}/>
                                </ListBox>}
                        </CardSection>
                    </div>
                    <div className="col-span-7">
                        <Outlet/>
                    </div>
                </div>
            </PageLayout>
        </MainLayout>
    )
}

export default UserProfile