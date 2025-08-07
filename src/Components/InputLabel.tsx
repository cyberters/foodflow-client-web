import React from "react";

interface InputLabelProps {
    label: string
    htmlFor?: string
}

const InputLabel : React.FC<InputLabelProps> = ({label, htmlFor}) => {
    return <label className="text-sm font-medium text-gray-700" htmlFor={htmlFor}>{label}</label>
}

export default InputLabel