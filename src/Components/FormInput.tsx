import React, { useState, ChangeEvent } from "react";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = (props) => {
  const [inputActive, setInputActive] = useState(false);

  const { onChange, ...rest } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputActive(true);
    if (onChange) {
      onChange(e)
    }
  };

  return (
    <input
      {...rest}
      className={`transition-all border border-solid ${
        inputActive ? "border-brand-warm" : "border-brand-warm/80"
      } px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-normal`}
      onChange={handleChange}
    />
  );
};

export default FormInput;
