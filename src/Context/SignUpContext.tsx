import React, { createContext } from 'react';

const initialState = { 
    signUpState: '',
    setSignUpState: React.Dispatch<React.SetStateAction<string>>
};

export type SignUpState = typeof initialState;

export const SignUpContext = createContext<typeof initialState>(initialState);