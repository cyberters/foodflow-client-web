import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightLong, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AlertBadge from './AlertBadge';
import { NavLink } from 'react-router-dom';

const MAX_LENGTH = 20;
const MIN_LENGTH_USER = 3;
const MIN_LENGTH_PASS = 12;

export type RegisterFormInput = {
  userName: string
  userEmail: string
  password: string
  confirmPassword: string
  consent: boolean
}

type OnSubmitProps = {
  onSubmit: SubmitHandler<RegisterFormInput>
}

const RegisterForm: React.FC<OnSubmitProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RegisterFormInput>()

  const userName = watch('userName', '');
  const password = watch('password', '');

  const remaining = Math.max(MIN_LENGTH_PASS - password.length, 0);

  return (
    <div className="w-full mx-auto px-4 py-3 border border-black border-solid rounded-md space-y-6 flex flex-col">
      <div className="flex flex-col space-y-2">
        <FontAwesomeIcon icon={faUserPlus} className='text-brand-warm h-6 me-auto'/>
        <h2 className="text-2xl text-center me-auto">Rejestracja</h2>
      </div>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col space-y-1'>
          <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">Nazwa użytkownika</label>
          <input
            id="text"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-normal"
            {...register("userName", { 
              required: "Nazwa użytkownika jest wymagana",
              minLength: {
                  value: MIN_LENGTH_USER,
                  message: `Minimum ${MIN_LENGTH_USER} znaków`
              }
            })}
          />
          {errors.userName && <AlertBadge label={errors.userName?.message} className='bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md'/>}
        </div>
        <div className='flex flex-col space-y-1'>
          <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("userEmail", { 
              required: "Adres email jest wymagany"
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-normal"
          />
          {errors.userEmail && <AlertBadge label={errors.userEmail?.message} className='bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md'/>}
        </div>
        <div className='flex flex-col space-y-1'>
          <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">Hasło</label>
          <input
            id="password"
            type="password"
            {...register("password", { 
              required: "Hasło jest wymagane",
              minLength: {
                  value: MIN_LENGTH_PASS,
                  message: `Minimum ${MIN_LENGTH_PASS} znaków`
              }
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-normal"
          />
          {errors.password ? (
                <AlertBadge
                    label={errors.password.message}
                    className="bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md mt-2 block"
                />
            ) : (
                remaining > 0 && (
                    <AlertBadge
                        label={`Brakuje ${remaining} znaków`}
                        className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-3 py-1 rounded-md mt-2 block"
                    />
                )
          )}
        </div>
        <div className='flex flex-col space-y-1'>
          <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">Potwierdź hasło</label>
          <input
            id="password"
            type="password"
            {...register("confirmPassword", { 
              required: "Potwierdzenie hasła jest wymagane",
              validate: (value) =>
                        value === password || 'Hasła muszą się zgadzać'
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-brand-normal"
          />
          {errors.confirmPassword && <AlertBadge label={errors.confirmPassword?.message} className='bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md'/>}
        </div>
        <div className='flex flex-col space-y-2'>
          <label className="flex items-start gap-2">
              <input
                  type="checkbox"
                  {...register('consent', {
                      required: 'Musisz wyrazić zgodę, aby kontynuować',
                  })}
                  className="mt-1"
              />
              <span className='text-sm text-gray-700'>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu założenia konta i akceptuję regulamin.
              </span>
          </label>
          {errors.confirmPassword && <AlertBadge label={errors.consent?.message} className='bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md'/>}
        </div>
        <button
          type="submit"
          className="w-full bg-brand-normal text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-warm transition"
        >
          Załóż konto
        </button>
      </form>

      <div className="flex items-center justify-center gap-3">
        <div className="h-px bg-gray-300 w-1/4"></div>
        <span className="text-sm text-gray-500">lub</span>
        <div className="h-px bg-gray-300 w-1/4"></div>
      </div>

      <div className="flex flex-col space-y-3">
        {/* <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
          <FontAwesomeIcon icon={faGoogle}/>
          <span className="text-sm font-medium">Zaloguj przez Google</span>
        </button> */}
        <NavLink to={`/sign-in`} className="flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
          <FontAwesomeIcon icon={faArrowRightLong}/>
          <span className="text-sm font-medium">Przejdź do logowania</span>
        </NavLink>
      </div>
    </div>
  );
};

export default RegisterForm;
