import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { LoginResponse } from "../services/login-service";

interface Props {
    children: ReactNode
}

type AuthType = {
    auth:LoginResponse;
    setAuth:Dispatch<SetStateAction<LoginResponse>>
}

const initializeAuth = {
    message:'',
    session_id:0
}
const AuthContext = createContext<AuthType>({
    auth: initializeAuth,
    setAuth: () => {}}
);

export const AuthProvider = ({children} : Props) => {
    const [auth, setAuth] = useState(initializeAuth)

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
