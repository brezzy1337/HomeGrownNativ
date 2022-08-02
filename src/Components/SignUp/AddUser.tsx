import React, {useContext} from 'react';
import axios from 'axios';
import {SignUpContext} from '../../Context/SignUpContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParam} from '../../App';
import {useFormik} from 'formik';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

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
      onSubmit: values;
    },
  });

  const onSubmit = async (values: Values) => {

    setSignUpState('addLocation');
  };

  return (
    <View>
      <Text style={{fontSize: 36}}>Join Home Grown</Text>
      <ul>
        <li>
          <Text>
            Expand your local foods community by buying and selling produce,
            grown right down your street.
          </Text>
        </li>
        <li>
          <Text>
            Let your property become a source of income and substainbility.
          </Text>
        </li>
      </ul>
      <TextInput
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <TextInput
        label="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
      />
      <TextInput
        label="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
      />
      <Button style={{marginTop: 20}} mode="contained" onPress={formik.handleSubmit}>
        <Text style={{color: 'white'}}>Next</Text>
    </Button>
    </View>
  );
};

export default AddUser;
