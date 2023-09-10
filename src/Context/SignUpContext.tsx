import React, {createContext, Dispatch, SetStateAction} from 'react';

const initialState = {
    signUpState: '',
    setSignUpState: {} as Dispatch<SetStateAction<string>>
};

export type SignUpState = typeof initialState;
export const SignUpContext = createContext<typeof initialState>(initialState);