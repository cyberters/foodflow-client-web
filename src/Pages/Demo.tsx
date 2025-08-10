import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import PageLayout from '../Layouts/PageLayout'
import CardItem from '../Components/CardItem'
import MainButton from '../Components/MainButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../Components/Dropdown'
import ShoppingFamily from '../Assets/Images/ShoppingFamily.jpg'

const Demo: React.FC = () => {
    return (
        <MainLayout>
            <PageLayout>
                <div className='flex-grow py-5'>
                    <div className="grid grid-cols-6 gap-8">
                        <div className="col-span-6 lg:col-span-2 flex flex-col space-y-4 lg:px-2">
                            <CardItem intro='Demo' header='Witaj w demo!' desc='Cześć! Zapraszamy Cię do odkrycia, jak działa nasza aplikacja.
Sprawdź, jak łatwo możesz planować zdrowe posiłki i cieszyć się gotowaniem — wszystko w jednym miejscu.
Gotowy na smakowitą przygodę?' background={false}/>
                            <div className="flex flex-row space-x-4">
                                <MainButton label='Zaloguj się' href='/sign-in'>
                                    <FontAwesomeIcon icon={faUser}/>
                                </MainButton>
                                <MainButton label='Załóż konto' href='/sign-up'>
                                    <FontAwesomeIcon icon={faUserPlus}/>
                                </MainButton>
                            </div>
                            <div></div>
                            <img src={ShoppingFamily} alt="ShoppingFamily" srcSet="" className='rounded-lg animate-slide-down-slow border border-solid border-black'/>
                        </div>
                        <div className="col-span-6 lg:col-span-4 flex flex-col space-y-4">
                            <CardItem intro='FAQ' header='Najczęściej zadawane pytania' background={false}/>
                            <Dropdown/>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </MainLayout>
    )
}

export default Demo