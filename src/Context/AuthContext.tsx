import React, { createContext, Dispatch, SetStateAction } from 'react';

const initialState = { 
    authState: false,
    setAuthState: {} as Dispatch<SetStateAction<boolean>>
};

export type AuthState = typeof initialState;

export const AuthContext = createContext<typeof initialState>(initialState);