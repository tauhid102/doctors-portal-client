import React, { createContext } from 'react';
import useFirebase from '../../hooks/UseFirebase';
export const AuthContext=createContext(null);

const AuthProvide = ({children}) => {
    const allContext=useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;