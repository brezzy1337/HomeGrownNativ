import React, {useContext} from 'react';
import axios from 'axios';
import {SignUpContext} from '../../Context/SignUpContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParam} from '../../App';
import {useFormik} from 'formik';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

const AddLocation: React.FC = () => {
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
      setSignUpState('addpayment');
      console.log(values);
    },
  });

  const cityInputRef = React.useRef<any>(null)
  const stateInputRef = React.useRef<any>(null)
  const zipInputRef = React.useRef<any>(null)


  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 18,
          alignSelf: 'center',
          paddingTop: '12%',
          paddingLeft: '8%',
          paddingRight: '8%',
          textDecorationLine: 'underline'
        }}>
        Connect with liked minded people passionate about local food.
      </Text>
      <TextInput
        mode="outlined"
        underlineColor="#92a54a"
        outlineColor="lightgrey"
        style={{marginTop: '8%', marginLeft: '8%', marginRight: '10%'}}
        label="Address"
        value={formik.values.address}
        onChange={formik.handleChange('address')}
        onSubmitEditing={() => (cityInputRef.current.focus())}
        error={formik.touched.address && Boolean(formik.errors.address)}
      />
      <TextInput
        mode="outlined"
        underlineColor="#92a54a"
        outlineColor="lightgrey"
        style={{marginTop: '4%', marginLeft: '8%', marginRight: '10%'}}
        label="City"
        value={formik.values.city}
        ref={cityInputRef}
        onSubmitEditing={() => (stateInputRef.current.focus())}
        onChangeText={formik.handleChange('city')}
        error={formik.touched.city && Boolean(formik.errors.city)}
      />
      <TextInput
        mode="outlined"
        underlineColor="#92a54a"
        outlineColor="lightgrey"
        style={{marginTop: '4%', marginLeft: '8%', marginRight: '10%'}}
        label="State"
        value={formik.values.state}
        ref={stateInputRef}
        onSubmitEditing={() => (zipInputRef.current.focus())}
        onChangeText={formik.handleChange('state')}
        error={formik.touched.state && Boolean(formik.errors.state)}
      />
      <TextInput
        mode="outlined"
        underlineColor="#92a54a"
        outlineColor="lightgrey"
        style={{marginTop: '4%', marginLeft: '8%', marginRight: '10%'}}
        label="Zip"
        value={formik.values.zip}
        ref={zipInputRef}
        onChange={formik.handleChange('zip')}
        error={formik.touched.zip && Boolean(formik.errors.zip)}
      />
      <Button
        style={{
          flex: 1,
          marginTop: 20,
          position: 'absolute',
          bottom: '5%',
          alignSelf: 'center',
          width: '80%',
        }}
        mode="contained"
        onPress={formik.handleSubmit}>
        <Text style={{color: 'white'}}>Next</Text>
      </Button>

      <Text style={{paddingTop: '6%', paddingLeft: '8%', paddingRight: '8%'}}>
        Your Address will be placed as a ping on our GPS service if your selling
        products.
      </Text>
    </View>
  );
};

export default AddLocation;
