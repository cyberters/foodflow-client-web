import React from "react";
import FormLayout from "./FormLayout";
import FormInput from "./FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import AlertBadge from "./AlertBadge";

export type FindUserFormProps = {
    userEmail: string
}

type OnSubmitProps = {
    onSubmit: SubmitHandler<FindUserFormProps>
}

const FindUserForm : React.FC<OnSubmitProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm<FindUserFormProps>()

    return (
        <FormLayout onSubmit={handleSubmit(onSubmit)} vertical={true}>
            <div className="flex flex-col space-y-1">
                <FormInput placeholder="Podaj adres email..." {...register("userEmail", { required: true })}/>
                {errors.userEmail && <AlertBadge label='To pole jest wymagane'/>}
            </div>
            <button
                type="submit"
                className="bg-brand-normal text-white py-2 px-4 rounded-sm hover:bg-brand-warm transition text-sm"
            >
                Znajdź
            </button>
        </FormLayout>
    )
}

export default FindUserForm