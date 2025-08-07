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
                    <div className="grid grid-cols-3 gap-8">
                        <div className='flex'>
                            <img src={foodFlow001} alt="" srcSet="" className='h-[375px] w-auto mx-auto my-auto'/>
                        </div>
                        <div className='flex items-center'><RegisterForm onSubmit={onSubmit}/></div>
                        <div className='flex'>
                            <img src={foodFlow002} alt="" srcSet="" className='h-[375px] w-auto mx-auto my-auto'/>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </MainLayout>
    )
}

export default RegisterPage