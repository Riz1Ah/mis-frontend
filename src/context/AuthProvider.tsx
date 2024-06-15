import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { LoginResponse } from "../services/login-service";

interface Props {
    children: ReactNode
}

type AuthType = {
    auth:{};
    setAuth:Dispatch<SetStateAction<LoginResponse>>
}

// const initialLoginResponse:LoginResponse = {
//     message:'0',
//     sessionId:0
// } 
const AuthContext = createContext<AuthType>({
    auth: {},
    setAuth: () => {}}
);

export const AuthProvider = ({children} : Props) => {
    const [auth, setAuth] = useState({})

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
