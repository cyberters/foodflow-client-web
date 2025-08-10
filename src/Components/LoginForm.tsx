import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AlertBadge from './AlertBadge';
import { faArrowRightLong, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export type LoginFormInput = {
  userEmail: string
  userPassword: string
}

type OnSubmitProps = {
  onSubmit: SubmitHandler<LoginFormInput>
}

const LoginForm: React.FC<OnSubmitProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<LoginFormInput>()

  return (
    <div className="w-full mx-auto px-4 py-3 border border-black/60 border-solid rounded-md space-y-6">
      <div className="flex flex-col space-y-2">
        <FontAwesomeIcon icon={faUserPlus} className='text-brand-warm h-6 me-auto'/>
        <h2 className="text-2xl text-center me-auto">Logowanie</h2>
      </div>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col space-y-1'>
          <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("userEmail", { required: "Adres email jest wymagany" })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-normal"
          />
          {errors.userEmail && <AlertBadge label={errors.userEmail?.message} className='bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md'/>}
        </div>

        <div className='flex flex-col space-y-1'>
          <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">Hasło</label>
          <input
            id="password"
            type="password"
            {...register("userPassword", { required: "Hasło jest wymagane" })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-normal"
          />
          {errors.userPassword && <AlertBadge label={errors.userPassword?.message} className='bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md'/>}
        </div>

        <button
          type="submit"
          className="w-full bg-brand-normal text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-warm transition"
        >
          Zaloguj się
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
        <NavLink to={`/sign-up`} className="flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
          <FontAwesomeIcon icon={faArrowRightLong}/>
          <span className="text-sm font-medium">Przejdź do rejestracji</span>
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
