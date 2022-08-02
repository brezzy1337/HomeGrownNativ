import React, {useState} from 'react';
import {SignUpContext} from '../Context/SignUpContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParam} from '../App';
import AddUser from '../Components/SignUp/AddUser';

const SignUpScreen: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();

  const [signUpState, setSignUpState] = useState<string>('addUser');

  return (
    <SignUpContext.Provider value={{signUpState, setSignUpState}}>
      <>
        {signUpState === 'addUser' ? (
          <AddUser />
        ) : signUpState === 'addLocation' ? (
          <AddLocation />
        ) : (
          <AddPayment />
        )}
      </>
    </SignUpContext.Provider>
  );
};

export default SignUpScreen;
