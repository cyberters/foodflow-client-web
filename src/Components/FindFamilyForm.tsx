import React from "react";
import FormLayout from "./FormLayout";
import FormInput from "./FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import AlertBadge from "./AlertBadge";

export type FindFamilyInputProps = {
    familyName: string
}

type OnSubmitProps = {
    onSubmit: SubmitHandler<FindFamilyInputProps>
}

const FindFamilyForm : React.FC<OnSubmitProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm<FindFamilyInputProps>()

    return (
        <FormLayout onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-1">
                <FormInput placeholder="Podaj nazwę..." {...register("familyName", { required: true })}/>
                {errors.familyName && <AlertBadge label='To pole jest wymagane'/>}
            </div>
            <button
                type="submit"
                className="me-auto bg-brand-normal text-white py-2 px-4 rounded-md hover:bg-brand-warm transition text-sm"
            >
                Zapisz
            </button>
        </FormLayout>
    )
}

export default FindFamilyForm