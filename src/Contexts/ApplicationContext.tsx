import { createContext, useContext } from 'react'
import { ApplicationContextProps } from '../Models/ApplicationContextProps'
import { ApplicationContextProviderProps } from '../Models/ApplicationContextProviderProps'
import useCheckUserLoggedIn from '../Hooks/useCheckUserLoggedIn'

const ApplicationContext = createContext<ApplicationContextProps | undefined>(undefined)

export const ApplicationContextProvider: React.FC<ApplicationContextProviderProps> = ({children}) => {
    const { isLoggedIn, loading, error } = useCheckUserLoggedIn()

    return (
        <ApplicationContext.Provider value={{ isLoggedIn, loading, error}}>
            {children}
        </ApplicationContext.Provider>
    )
}

export const UseApplicationContext = (): ApplicationContextProps => {
    const context = useContext(ApplicationContext)

    if (!context) {
        throw new Error("UseApplicationContext must be used within an ApplicationContext");
    }

    return context;
}