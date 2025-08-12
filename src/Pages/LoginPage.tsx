import React, { useState, useContext } from 'react';
import MainLayout from '../Layouts/MainLayout';
import PageLayout from '../Layouts/PageLayout';
import LoginForm, { LoginFormInput } from '../Components/LoginForm';
import { SubmitHandler } from 'react-hook-form';
import AxiosService from '../Services/AxiosService';
import AlertBadge from '../Components/AlertBadge';
import foodFlow001 from '../Assets/Images/food-flow001.png';
import foodFlow002 from '../Assets/Images/food-flow002.png';
import { useNavigate } from 'react-router-dom';
import useCheckUserLoggedIn from '../Hooks/useCheckUserLoggedIn';

interface NotificationProps {
  isVisible: boolean;
  message: string;
  isError: boolean;
}

const LoginPage: React.FC = () => {
  const [notification, setNotification] = useState<NotificationProps>()

  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useCheckUserLoggedIn()

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    try {
      const res = await AxiosService.post(
        `/Auth/SignIn`,
        {
          userEmail: data.userEmail,
          password: data.userPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const token = res.data.tokenString;

      if (token) {
        sessionStorage.setItem('authToken', token);
        setNotification({
          isVisible: true,
          isError: false,
          message: 'Logowanie poprawne',
        });
        
        setIsLoggedIn(true);

        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 1500);
      }
    } catch (e: any) {
      setNotification({
        isVisible: true,
        isError: true,
        message:
          e.response?.data || 'Adres email lub hasło nieprawidłowe',
      });
    }
  };

  return (
    <MainLayout>
      <PageLayout>
        <div className="flex-grow py-5">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1 flex order-2">
              <img
                src={foodFlow001}
                alt=""
                className="w-full mx-auto my-auto"
              />
            </div>

            <div className="order-1 lg:order-2 col-span-2 lg:col-span-1 flex flex-col items-center space-y-3">
              {notification?.isVisible && (
                <AlertBadge
                  label={notification.message}
                  className={`border ${
                    notification.isError
                      ? 'bg-red-100 border-red-400 text-red-700'
                      : 'bg-green-100 border-green-400 text-green-700'
                  } px-2 py-1 rounded-md`}
                />
              )}
              <LoginForm onSubmit={onSubmit} />
            </div>

            <div className="col-span-1 flex order-2 lg:order-3">
              <img
                src={foodFlow002}
                alt=""
                className="w-full mx-auto my-auto"
              />
            </div>
          </div>
        </div>
      </PageLayout>
    </MainLayout>
  );
};

export default LoginPage;
