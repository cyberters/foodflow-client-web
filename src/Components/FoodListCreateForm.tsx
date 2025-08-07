import React from "react";
import FormLayout from "./FormLayout";
import FormInput from "./FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import AlertBadge from "./AlertBadge";

export type FoodListCreateFormProps = {
    foodListName: string
    foodListDescription: string
}

type OnSubmitProps = {
    onSubmit: SubmitHandler<FoodListCreateFormProps>
}

const FoodListCreateForm : React.FC<OnSubmitProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm<FoodListCreateFormProps>()

    return (
        <FormLayout onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="foodListName">Nazwa</label>
                <FormInput placeholder="np.: Szybkie obiady do pracy" {...register("foodListName", { required: true })}/>
                {errors.foodListName && <AlertBadge label='To pole jest wymagane' className='bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md'/>}
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="foodListDescription">Opis (opcjonalny)</label>
                <FormInput placeholder="np.: Proste w przygotowaniu" {...register("foodListDescription")}/>
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

export default FoodListCreateForm