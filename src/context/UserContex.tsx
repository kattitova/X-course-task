import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export type userContextType = {
    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<userContextType["userName"]>>,
    isLogged: boolean, 
    setLogged: React.Dispatch<React.SetStateAction<userContextType["isLogged"]>>
}
export const UserContext = React.createContext<userContextType | null>(null);

type Props = {
    children: string | JSX.Element | JSX.Element[],
  }

export function UserContextProvider({children}: Props) {
    const [savedUser] = useLocalStorage("bookStoreUser");
    const [userName, setUserName] = useState(savedUser.userName);
    const [isLogged, setLogged] = useState(savedUser.isLogged);
  
    return (
      <UserContext.Provider value={{ userName, setUserName, isLogged, setLogged }}>
        {children}
      </UserContext.Provider>
    );
  }