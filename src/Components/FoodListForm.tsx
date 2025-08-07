import React from "react";
import FormLayout from "./FormLayout";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import AlertBadge from "./AlertBadge";
import DatePickerInput from "./DatePickerInput";
import InputLabel from "./InputLabel";

export type FoodListFormProps = {
  dateStart: Date;
  dateEnd: Date;
};

type OnSubmitProps = {
  onSubmit: SubmitHandler<FoodListFormProps>;
};

const FoodListForm: React.FC<OnSubmitProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FoodListFormProps>();

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row space-x-4">
        <div className="flex flex-col space-y-1">
          <InputLabel htmlFor="dateStart" label="Data początkowa"/>
          <DatePickerInput
            control={control}
            name="dateStart"
            label="Data początkowa"
            rules={{ required: "To pole jest wymagane" }}
          />
          {errors.dateStart && <AlertBadge label={errors.dateStart.message || ""} className='bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md'/>}
        </div>

        <div className="flex flex-col space-y-1">
          <InputLabel htmlFor="dateEnd" label="Data końcowa"/>
          <DatePickerInput
            control={control}
            name="dateEnd"
            label="Data końcowa"
            rules={{ required: "To pole jest wymagane" }}
          />
          {errors.dateEnd && <AlertBadge label={errors.dateEnd.message || ""} className='bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded-md'/>}
        </div>
      </div>

      <button
        type="submit"
        className="me-auto bg-brand-normal text-white py-2 px-4 rounded-md hover:bg-brand-warm transition text-sm"
      >
        Zapisz
      </button>
    </FormLayout>
  );
};

export default FoodListForm;
