import React from "react";

export type userContextType = {
    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<userContextType["userName"]>>,
    isLogged: boolean, 
    setLogged: React.Dispatch<React.SetStateAction<userContextType["isLogged"]>>
}
export const UserContext = React.createContext<userContextType | null>(null);