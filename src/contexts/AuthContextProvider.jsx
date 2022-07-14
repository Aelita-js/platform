import React, { useState } from 'react';
import { AUTH_API } from '../helpers/Constants';
export const authContext = React.createContext();


const AuthContextProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <authContext.Provider value={{
            // loginUser,
            // logoutUser
        }}>
            {/* {children} */}
        </authContext.Provider>
    );
};

export default AuthContextProvider;