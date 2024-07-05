import { useContext, useEffect, useState } from "react";
import { BooksContext, arrayBooksType, booksContextType } from "../context/BooksContext";
import { UserContext, userContextType } from "../context/UserContex";

type localUserType = {
    userName: string,
    isLogged: boolean,
    orderBooks: Array<arrayBooksType>,
}

const initValue = {userName: "", isLogged: false, orderBooks: []};

const useLocalStorage = (key: string) => {
    const [localStorageValue, setLocalStorageValue] = useState(() => {
        const savedLocalStorageValue = window.localStorage.getItem(key);
        return savedLocalStorageValue ? JSON.parse(savedLocalStorageValue) : [initValue];
    });

    const activeUser = localStorageValue.filter((user : localUserType) => user.isLogged)[0] || initValue;

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(localStorageValue));
    },[key, localStorageValue]);

    const userContext = useContext(UserContext) as userContextType;
    const booksContext = useContext(BooksContext) as booksContextType;

    const setUserStateLogOut = ((user: localUserType) => {
        setLocalStorageValue((prevState: Array<localUserType>) => {
            return updateUserState(prevState, user, "isLogged", false);
        });

        booksContext.setBooks([]);
        userContext.setUserName("");
    });

    const setUserStateLogIn = ((user: localUserType) => {
        setLocalStorageValue((prevState: Array<localUserType>) => {
            const checkUser = prevState.filter((item: localUserType) => item.userName === user.userName)[0];
            if (checkUser) {
                if (checkUser.userName !== "") {
                    //якщо юзер вже логінився, то йому ставимо isLogged = true, та вантажимо корзину в BooksContext
                    booksContext.setBooks(checkUser.orderBooks);
                    return updateUserState(prevState, checkUser, "isLogged", true);
                } else return [...prevState];
            } else return [...prevState, user];
        });
    });

    const updateUserState = (usersArray: Array<localUserType>, user: localUserType, key: keyof localUserType, data: boolean | Array<arrayBooksType>) => {
        const logOutUserIndex = usersArray.findIndex((el: localUserType) => el.userName === user.userName);
        (user[key] as any) = data;
        usersArray.splice(logOutUserIndex, 1, user);
        return [...usersArray];
    };

    const updateOrderBooks = (user: localUserType) => {
        setLocalStorageValue((prevState: Array<localUserType>) => {
            return updateUserState(prevState, user, "orderBooks", user.orderBooks);
        });
    };

    return [activeUser as localUserType, setUserStateLogIn, setUserStateLogOut, updateOrderBooks] as const;
};

export default useLocalStorage;