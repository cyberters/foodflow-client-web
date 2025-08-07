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
                        <div className="col-span-2 flex flex-col space-y-4">
                            <CardItem intro='Demo' header='Witaj w demo!' desc='Test' background={false}/>
                            <div className="flex flex-row space-x-4 px-7">
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
                        <div className="col-span-4 flex flex-col space-y-4">
                            <h4 className='text-xl px-7'>Najczęsciej zadawane pytania</h4>
                            <Dropdown/>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </MainLayout>
    )
}

export default Demo