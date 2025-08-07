import React from "react";
import DatePicker from "react-datepicker";
import {
  Controller,
  Control,
  RegisterOptions,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

type DatePickerProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'>;
};

const DatePickerInput = <T extends FieldValues>({
  control,
  name,
  label,
  rules,
}: DatePickerProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <DatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Wybierz datę"
            // date={}
            className="border border-gray-300 rounded-lg p-2 text-sm focus:border-brand-normal focus:ring focus:ring-brand-normal"
          />
        )}
      />
    </div>
  );
};

export default DatePickerInput;
