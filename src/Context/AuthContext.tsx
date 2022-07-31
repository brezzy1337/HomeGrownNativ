import React, { createContext } from 'react';

const initialState = { 
    authState: false,
    setAuthState: React.Dispatch<React.SetStateAction<boolean>>
};

export type AuthState = typeof initialState;

export const AuthContext = createContext<typeof initialState>(initialState);