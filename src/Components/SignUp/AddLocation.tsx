import React, {useContext} from 'react';
import axios from 'axios';
import {SignUpContext} from '../../Context/SignUpContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParam} from '../../App';
import {useFormik} from 'formik';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';


const AddLocation = () => {
    
    const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();
    
      const {setSignUpState} = useContext(SignUpContext);
    
      interface Values {
        address: string;
        city: string;
        state: string;
        zip: string;
      }
    
      const formik = useFormik({
        initialValues: {
          address: '',
          city: '',
          state: '',
          zip: '',
        },
        onSubmit: (values: Values) => {
          onSubmit: values;
        },
      });
    
      const onSubmit = async (values: Values) => {
    
        setSignUpState('addPayment');
      };

  return (
    <View>
        <Text>Find Your Community</Text>
        <ul>
            <Text>Connect with top local growers</Text>
        </ul>
        <TextInput
        label="Address"
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        /> 
        <TextInput
        label="City"
        value={formik.values.city}
        onChange={formik.handleChange}
        error={formik.touched.city && Boolean(formik.errors.city)}
        />
        <TextInput
        label="State"
        value={formik.values.state}
        onChange={formik.handleChange}
        error={formik.touched.state && Boolean(formik.errors.state)}
        />
        <TextInput
        label="Zip"
        value={formik.values.zip}
        onChange={formik.handleChange}
        error={formik.touched.zip && Boolean(formik.errors.zip)}
        />
        <Button style={{marginTop: 20}} mode="contained" onPress={formik.handleSubmit}>
            <Text style={{color: 'white'}}>Next</Text>
        </Button>        
        <Text>Your Address will be placed as a ping on our GPS service if your selling products.</Text> 
    </View>
  )
}

export default AddLocation