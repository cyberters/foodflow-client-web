import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import PageLayout from '../Layouts/PageLayout'
import CardsBox from '../Components/CardsBox'
import Illustration001 from '../Assets/Images/Illustration001.svg'
import Illustration002 from '../Assets/Images/Illustration002.svg'
import ShoppingFamily from '../Assets/Images/ShoppingFamily.jpg'
import Cooking from '../Assets/Images/Cooking.jpg'
import CardItem from '../Components/CardItem'
import MainButton from '../Components/MainButton'
import Newsletter from '../Components/Newsletter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faRocket } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../Components/Dropdown'
import FooterPage from '../Components/FooterPage'

const Home: React.FC = () => {
    return (
        <MainLayout>
            <PageLayout>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 lg:py-16 px-3 lg:px-4 lg:h-[70vh]">
                    <div className="flex">
                        <div className='flex flex-col space-y-5 my-auto'>
                            <h4 className='text-xl bg-brand-warm px-3 py-2 rounded-md me-auto animate-bounce-slow'>Hello!</h4>
                            <h2 className='text-4xl'>Witaj w food.flow!</h2>
                            <p className='w-3/5'>Planuj szybciej, kupuj rozsądniej i nigdy nie zapomnij, co trzeba kupić.
    Z nami zakupy stają się prostsze, tańsze i lepiej zorganizowane.
    Wszystko, czego potrzebujesz – zawsze pod ręką.</p>
                            <div className="flex flex-row space-x-4">
                                <MainButton label='Poznaj nas' href='#about-us'>
                                    <FontAwesomeIcon icon={faArrowDown}/>
                                </MainButton>
                                <MainButton label='Sprawdź demo' href='/demo'>
                                    <FontAwesomeIcon icon={faRocket}/>
                                </MainButton>
                            </div>
                        </div>
                    </div>
                    <div className='lg:relative'>
                        <img src={Illustration001} alt="Girl with Shopping Bag and Logo" srcSet="" className='hidden lg:block lg:absolute lg:left-40 h-[20vh] lg:h-[60vh] animate-slide-right-slow z-20'/>
                        <img src={ShoppingFamily} alt="Shopping Family" srcSet="" className='lg:absolute lg:-left-60 lg:-top-10 lg:h-[40vh] rounded-lg animate-slide-down-slow border border-solid border-black'/>
                    </div>
                </div>
                <div id="about-us">
                    <CardsBox>
                        <CardItem intro="Przepłacasz za zakupy?"
                            header="Planuj z głową. Kupuj z sensem!"
                            desc="Nie wiesz, co masz w lodówce, więc kupujesz to samo. Spontaniczne zakupy kończą się zmarnowanym jedzeniem. To nie tylko strata pieniędzy, ale i czasu. Z food.flow planujesz świadomie i kupujesz tylko to, czego naprawdę potrzebujesz."
                            background={true}/>
                        <CardItem intro="Rutyna Cię męczy?"
                            header="Nowe pomysły. Zero nudy!"
                            desc="Codziennie te same dania? Brakuje Ci inspiracji na szybki, a ciekawy posiłek? W food.flow znajdziesz pomysły na urozmaicenie jadłospisu. Od teraz gotowanie nie musi być nudne ani powtarzalne."
                            background={true}/>
                        <CardItem intro="Za dużo fast-foodów?"
                            header="Zdrowiej dzięki planowi!"
                            desc="Brak czasu często kończy się niezdrowym wyborem. A przecież zdrowe jedzenie nie musi być trudne. Z food.flow zorganizujesz tygodniowy plan z wyprzedzeniem. I zadbasz o zdrowie – bez wysiłku."
                            background={true}/>
                    </CardsBox>
                </div>
                <div className="flex lg:py-16 py-12">
                    <img
                        src={Illustration002}
                        alt="How it works?"
                        className="mx-auto lg:h-[70vh] animate-wiggle-rotate"
                    />
                </div>
                <CardsBox>
                    <CardItem intro="My nadajemy ton, Ty dopisujesz smak"
                        header="Inteligentne planowanie zakupów"
                        desc="Twórz listy na podstawie planowanych posiłków, unikając zbędnych zakupów i dublowania produktów."
                        background={true}/>
                    <CardItem intro="Kontrolowana improwizacja"
                        header="Oszczędność czasu"
                        desc="Zawsze wiesz, co kupić — koniec z błądzeniem po sklepie i wracaniem po zapomniane składniki."
                        background={true}/>
                    <CardItem intro="W Twoim rytmie!"
                        header="Spersonalizowane rekomendacje"
                        desc="Aplikacja uczy się Twoich nawyków i podpowiada produkty oraz przepisy dopasowane do Ciebie i Twojej rodziny."
                        background={true}/>
                </CardsBox>
                <div></div>
                <div className="py-8">
                    <CardsBox>
                        <div className="col-span-1">
                            <img src={Cooking} alt="Cooking" srcSet="" className='rounded-lg animate-slide-down-slow border border-solid border-black'/>
                        </div>
                        <div className="col-span-2 flex flex-col space-y-3">
                            <CardItem intro="A komu to potrzebne?"
                                header="Przewracamy wiarę w samodzielne gotowanie!"
                                desc="Nie wymyślamy koła na nowo, ale w świecie zdominowanym przez „ASAP”, diety pudełkowe i gotowce,
                                przypominamy, że gotowanie w domu wciąż ma sens. I potrafi sprawiać radość.
                                Z nami planowanie zakupów staje się proste, a codzienne gotowanie mniej stresujące i bardziej satysfakcjonujące.
                                Pomagamy Ci lepiej organizować listy, ograniczać marnowanie jedzenia i na nowo zakochać się w domowych posiłkach.
                                Bo gotowanie to nie obowiązek. To styl życia, który warto odzyskać."
                                background={false}
                                border={false}/>
                            <Dropdown/>
                        </div>
                    </CardsBox>
                </div>
                <div className="py-8">
                    <Newsletter/>
                </div>
                <FooterPage/>
            </PageLayout>
        </MainLayout>
    )
}

export default Home