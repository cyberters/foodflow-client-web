import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import PageLayout from '../Layouts/PageLayout'
import AxiosService from '../Services/AxiosService'
import RegisterForm, { RegisterFormInput } from '../Components/RegisterForm'
import { SubmitHandler } from 'react-hook-form'
import foodFlow001 from '../Assets/Images/food-flow001.png'
import foodFlow002 from '../Assets/Images/food-flow002.png'

const RegisterPage: React.FC = () => {
    const onSubmit: SubmitHandler<RegisterFormInput> = async (data) => {
        await AxiosService.post(
            `/User/SignUp`,
            {
                userName: data.userName,
                userEmail: data.userEmail,
                password: data.password,
                confirmPassword: data.confirmPassword
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            window.location.replace('/sign-in')
        }).catch((e) => {
            console.log(e)
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
                        <div className='order-1 lg:order-2 col-span-2 lg:col-span-1 flex flex-col items-center space-y-3'><RegisterForm onSubmit={onSubmit}/></div>
                        <div className='col-span-1 flex order-2 lg:order-3'>
                            <img src={foodFlow002} alt="" srcSet="" className='w-full w-auto mx-auto my-auto'/>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </MainLayout>
    )
}

export default RegisterPage