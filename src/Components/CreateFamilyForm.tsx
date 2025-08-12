import React from "react";
import FormLayout from "./FormLayout";
import FormInput from "./FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import AlertBadge from "./AlertBadge";

export type CreateFamilyInputProps = {
    FamilyName: string
}

type OnSubmitProps = {
    onSubmit: SubmitHandler<CreateFamilyInputProps>
}

const CreateFamilyForm : React.FC<OnSubmitProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm<CreateFamilyInputProps>()

    return (
        <FormLayout onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-1">
                <label className="block mb-1 text-xs lg:text-sm font-medium text-gray-700" htmlFor="FamilyName">Nazwa</label>
                <FormInput {...register("FamilyName", { required: "Nazwa rodziny jest wymagana" })}/>
                {errors.FamilyName && <AlertBadge label={errors.FamilyName.message} className='bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md'/>}
            </div>
            <button
                type="submit"
                className="me-auto bg-brand-normal text-white py-2 px-4 rounded-md hover:bg-brand-warm transition text-xs lg:text-sm"
            >
                Zapisz
            </button>
        </FormLayout>
    )
}

export default CreateFamilyForm