import React, { FormHTMLAttributes, ReactNode } from "react";

interface FormLayoutProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode
    vertical?: boolean 
}

const FormLayout : React.FC<FormLayoutProps> = ({vertical = false, children, ...props}) => {
    return (
        <form className={`flex ${vertical ? `flex-row space-x-3` : `flex-col space-y-3`} pt-2 border border-black/60 border-solid rounded-md bg-primary px-4 py-3`} {...props}>
            {children}
        </form>
    )
}

export default FormLayout