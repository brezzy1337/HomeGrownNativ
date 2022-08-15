import React, {useContext} from 'react';
import axios from 'axios';
import {SignUpContext} from '../../Context/SignUpContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParam} from '../../App';
import {useFormik} from 'formik';
import {StyleSheet, View} from 'react-native';
import {Button, Text, TextInput, Headline} from 'react-native-paper';

const AddUser: React.FC = () => {
  
  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();

  const {setSignUpState} = useContext(SignUpContext);

  interface Values {
    email: string;
    username: string;
    password: string;
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: (values: Values) => {
      console.log(values);
      setSignUpState('addLocation')
    },
  });

  const usernameInputRef = React.useRef<any>(null);
  const passwordInputRef = React.useRef<any>(null);
  const testRef = React.useRef<any>(null);

  React.useEffect(() => {
    console.log(usernameInputRef);
    console.log(usernameInputRef.current.isFocused())
    console.log(passwordInputRef);
  }, [usernameInputRef])
  
  

  return (
    <View style={{ paddingTop: '8%', height: '100%', backgroundColor: 'white' }}>
      <Headline style={{ fontSize: 26, alignSelf: 'flex-start', paddingLeft: '8%', textDecorationLine: 'underline' }}>Join Home Grown</Headline>

          <Text style={{ fontSize: 18, alignSelf: 'center', paddingTop: '8%', paddingLeft: '8%', paddingRight: '8%' }}>
            Expand your local foods community by buying and selling produce,
            grown right down your street.
          </Text>
          {/* <Text style={{ fontSize: 18, alignSelf: 'flex-start', paddingTop: '5%', paddingLeft: '10%', paddingRight: '8%' }}>
            Let your property become a source of income and substainbility.
          </Text> */}

      <TextInput
        mode='outlined'
        underlineColor='#92a54a'
        outlineColor='lightgrey'
        style={{ marginTop: '4%', marginLeft: '8%', marginRight: '10%' }}
        label="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onSubmitEditing={() => (usernameInputRef.current.focus())}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <TextInput
        mode='outlined'
        underlineColor='#92a54a'
        outlineColor='lightgrey'
        style={{ marginTop: '2%', marginLeft: '8%', marginRight: '10%' }}
        label="Username"
        value={formik.values.username}
        ref={usernameInputRef}
        onChangeText={formik.handleChange('username')}
        onSubmitEditing={() => (passwordInputRef.current.focus())}
        error={formik.touched.username && Boolean(formik.errors.username)}
      />
      <TextInput
        mode='outlined'
        underlineColor='#92a54a'
        outlineColor='lightgrey'
        style={{ marginTop: '2%', marginLeft: '8%', marginRight: '10%' }}
        label="Password"
        value={formik.values.password}
        ref={passwordInputRef}
        onChangeText={formik.handleChange('password')}
        error={formik.touched.password && Boolean(formik.errors.password)}
      />
      <Text style={{ paddingTop: '6%', paddingLeft: '8%', paddingRight: '8%'}}>
        By clicking below and creating an account, I agree to HomeGrown's Terms of Service and Privacy Policy.
      </Text>
      <Button style={{flex: 1, marginTop: 20, position: 'absolute', bottom: '5%', alignSelf: 'center', width: '80%'}} mode="contained" onPress={formik.handleSubmit}>
        <Text style={{color: 'white'}}>Next</Text>
    </Button>
    </View>
  );
};

export default AddUser;
