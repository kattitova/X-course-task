import React from "react";

export type contextType = {
    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<contextType["userName"]>>,
    isLogged: boolean, 
    setLogged: React.Dispatch<React.SetStateAction<contextType["isLogged"]>>
}
export const Context = React.createContext<contextType | null>(null);