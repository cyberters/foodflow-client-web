import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardHeader from "../Components/CardHeader"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import CreateUserProfileForm, { CreateUserProfileInput } from "../Components/CreateUserProfileForm"
import CardSection from "../Components/CardSection"
import useActiveMetrics from "../Hooks/useActiveMetrics"
import useGenders from "../Hooks/useGenders"
import useDiets from "../Hooks/useDiets"
import AxiosService from "../Services/AxiosService"
import ListBox from "../Components/ListBox"
import foodFlow004 from '../Assets/Images/food-flow004.png'
import ListBoxItem from "../Components/ListBoxItem"

const CreateProfile: React.FC = () => {
    const { activeMetrics, loading, error } = useActiveMetrics()
    const { genders, loading: loadingGenders, error: errorGenders } = useGenders()
    const { diets, loading: loadingDiets, error: errorDiets } = useDiets()

    const onSubmit = async (data: CreateUserProfileInput) => {
        await AxiosService.post(
            `/UserProfile/store/${data.ActivityLevel}/${data.Diet}/${data.UserGenderId}`,
            {
                userFirstName: data.UserFirstName,
                userAge: data.UserAge,
                userWeight: data.UserWeight,
                userHeight: data.UserHeight,
                userAlergic: data.UserAlergic
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
        <div className="flex-grow space-y-4 h-full">
            <CardHeader title="Stwórz swój profil" subtitle="Profil">
                <FontAwesomeIcon icon={faUser} className="me-auto h-8 text-brand-warm" />
            </CardHeader>
            <div className="grid grid-cols-5 gap-4">
                <section className="col-span-5 lg:col-span-3 bg-brand-warm/10 px-3 py-2 rounded-md mb-auto">
                    <CreateUserProfileForm
                        ActiveMetrics={activeMetrics}
                        Genders={genders}
                        Diets={diets}
                        onSubmit={onSubmit}
                    />
                </section>
                <section className="col-span-5 lg:col-span-2">
                    <ListBox>
                        <ListBoxItem label="Instrukcja"/>
                            <div className="flex flex-col space-y-3 pt-2 pb-2 overflow-x-hidden">
                                <h3 className="text-lg">Złap kulinarny rytm i jedz tak, jak lubisz</h3>
                                <span className="text-sm lg:text-md w-4/5">Uzupełnij swój profil, a my zadbamy o odpowiednią liczbę kalorii i pyszne pomysły na każdy dzień. <br />
    Twój styl życia, Twoje potrzeby, Twój food.flow.</span>
                                <div className="relative w-full h-[20vw] overflow-hidden">
                                    <img
                                        src={foodFlow004}
                                        alt=""
                                        className="absolute top-0 left-0 w-[20vw] animate-slide-left-to-right"
                                    />
                                </div>
                            </div>
                    </ListBox>
                </section>
            </div>
        </div>
    )
}

export default CreateProfile
