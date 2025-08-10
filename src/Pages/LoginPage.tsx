import React, { useState } from 'react'
import MainLayout from '../Layouts/MainLayout'
import PageLayout from '../Layouts/PageLayout'
import LoginForm, { LoginFormInput } from '../Components/LoginForm'
import { SubmitHandler } from 'react-hook-form'
import AxiosService from '../Services/AxiosService'
import AlertBadge from '../Components/AlertBadge'
import foodFlow001 from '../Assets/Images/food-flow001.png'
import foodFlow002 from '../Assets/Images/food-flow002.png'
import { useNavigate } from 'react-router-dom'

interface NotificationProps {
    isVisible: boolean
    message: string
    isError: boolean
}

const LoginPage: React.FC = () => {
    const [notification, setNotification] = useState<NotificationProps>()

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
        await AxiosService.post(
            `/Auth/SignIn`,
            {
                userEmail: data.userEmail,
                password: data.userPassword
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            const token = res.data.tokenString
            token && sessionStorage.setItem('authToken', token)
            setNotification({
                isVisible: true,
                isError: false,
                message: "Logowanie poprawne"
            })
            setTimeout(() => {
                navigate('/dashboard')
            }, 3000);
        }).catch((e) => {
            setNotification({
                isVisible: true,
                isError: true,
                message: (e.response == true) ? e.response.data : "Adres email lub hasło nieprawidłowe"
            })
        })
    }

    return (
        <MainLayout>
            <PageLayout>
                <div className='flex-grow py-5'>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className='col-span-1 flex order-2'>
                            <img src={foodFlow001} alt="" srcSet="" className='w-full mx-auto my-auto'/>
                        </div>
                        <div className='order-1 lg:order-2 col-span-2 lg:col-span-1 flex flex-col items-center space-y-3'>
                            {notification?.isVisible && <AlertBadge label={notification.message} 
                            className={`border ${notification.isError ? `bg-red-100 border-red-400 text-red-700` : `bg-green-100 border-green-400 text-green-700`} px-2 py-1 rounded-md`}/>}
                            <LoginForm onSubmit={onSubmit}/>
                        </div>
                        <div className='col-span-1 flex order-2 lg:order-3'>
                            <img src={foodFlow002} alt="" srcSet="" className='w-full mx-auto my-auto'/>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </MainLayout>
    )
}

export default LoginPage