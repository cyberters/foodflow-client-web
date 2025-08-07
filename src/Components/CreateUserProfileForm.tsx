import React, { useState } from "react";
import FormInput from "./FormInput";
import { ActiveMetricProps } from "../Models/ActiveMetricProps";
import { GenderProps } from "../Models/GenderProps";
import { SubmitHandler, useForm } from "react-hook-form";
import { DietProps } from "../Models/DietProps";

interface CreateUserProfileFormProps {
  ActiveMetrics: ActiveMetricProps[] | undefined;
  Genders: GenderProps[] | undefined;
  Diets: DietProps[] | undefined;
  onSubmit: SubmitHandler<CreateUserProfileInput>;
}

export type CreateUserProfileInput = {
  UserFirstName: string;
  UserAge: number;
  UserHeight: number;
  UserWeight: number;
  UserGenderId: number;
  UserAlergic: string;
  ActivityLevel: number;
  Diet: number;
};

const inputMap = [
  { name: "UserFirstName", label: "Jak masz na imię?", type: "text" },
  { name: "UserGenderId", label: "Jak mam się do Ciebie zwracać?", type: "select-gender" },
  { name: "UserAge", label: "Ile masz lat?", type: "range", min: 12, max: 100 },
  { name: "UserHeight", label: "Jaki masz wzrost?", type: "range", min: 155, max: 220 },
  { name: "UserWeight", label: "Ile ważysz?", type: "range", min: 30, max: 180 },
  { name: "UserAlergic", label: "Masz jakieś alergie?", type: "text" },
  { name: "ActivityLevel", label: "Czy uprawiasz jakiś sport albo ćwiczysz?", type: "select-activity" },
  { name: "Diet", label: "Jaka jest Twoja preferowana dieta?", type: "select-diet" },
];

const CreateUserProfileForm: React.FC<CreateUserProfileFormProps> = ({
  ActiveMetrics,
  Genders,
  Diets,
  onSubmit,
}) => {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<CreateUserProfileInput>();

  const field = inputMap[step];
  const fieldName = field.name as keyof CreateUserProfileInput;
  const watchedValue = watch(fieldName);

  const goNext = async () => {
    const valid = await trigger(fieldName);
    if (valid && step < inputMap.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const progressPercent = ((step + 1) / inputMap.length) * 100;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 py-1">
      {/* Pasek postępu */}
      <div className="flex flex-col space-y-2">
        <small>
          Postęp: {step + 1} / {inputMap.length}
        </small>
        <div className="w-full bg-gray-300 h-2 rounded">
          <div
            className="bg-brand-warm h-2 rounded transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Pojedynczy krok */}
      <div className="flex flex-col space-y-1 animate-fade-in">
        <label htmlFor={field.name}>
          <small>{field.label}</small>
        </label>

        {field.type === "select-gender" ? (
          <select
            id={field.name}
            {...register("UserGenderId", { required: true })}
            className="border border-gray-300 rounded px-3 py-2"
            defaultValue=""
          >
            <option value="">Wybierz formę grzecznościową...</option>
            {Genders?.map((g) => (
              <option key={g.genderId} value={g.genderId}>
                {g.genderName}
              </option>
            ))}
          </select>
        ) : field.type === "select-activity" ? (
          <select
            id={field.name}
            {...register("ActivityLevel", { required: true })}
            className="border border-gray-300 rounded px-3 py-2"
            defaultValue=""
          >
            <option value="">Wybierz poziom aktywności...</option>
            {ActiveMetrics?.map((a) => (
              <option key={a.activeMetricId} value={a.activeMetricId}>
                {a.activeMetricName}
              </option>
            ))}
          </select>
        ) : field.type === "select-diet" ? (
          <select
            id={field.name}
            {...register("Diet", { required: true })}
            className="border border-gray-300 rounded px-3 py-2"
            defaultValue=""
          >
            <option value="">Wybierz preferowaną dietę...</option>
            {Diets?.map((a) => (
              <option key={a.dietId} value={a.dietId}>
                {a.dietName}
              </option>
            ))}
          </select>
        ) : field.type === "range" ? (
          <>
            <input
              type="range"
              id={field.name}
              min={field.min}
              max={field.max}
              {...register(field.name as keyof CreateUserProfileInput, { required: true })}
              className="w-full"
            />
            <div className="text-right text-sm text-gray-600">
              Wybrano: <strong>{watchedValue || field.min}</strong>
            </div>
          </>
        ) : (
          <FormInput
            type={field.type}
            id={field.name}
            {...register(field.name as keyof CreateUserProfileInput, { required: true })}
          />
        )}

        {errors[field.name as keyof CreateUserProfileInput] && (
          <small className="text-red-500">To pole jest wymagane</small>
        )}
      </div>

      <div className="flex gap-4 mt-4">
        {step > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 transition"
          >
            Wstecz
          </button>
        )}
        {step < inputMap.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="bg-brand-normal text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-warm transition"
          >
            Dalej
          </button>
        ) : (
          <button
            type="submit"
            className="bg-brand-normal text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-warm transition"
          >
            Zapisz
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateUserProfileForm;
