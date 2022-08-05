import React, { useState, useEffect, useContext, FC } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParam} from '../../../App';
import { GraphQLClient } from 'graphql-request';
import { NEW_GET_CLIENT_TOKEN } from "./Queries";
import { VAULT_PAYMENT_MEHTOD } from "./Queries";
// import braintree from 'braintree-web';
import { requestBillingAgreement, requestDeviceData, PaypalResponse } from 'react-native-paypal';
import { Alert, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Image } from 'react-native';

const VaultPaypal: React.FC = () => {

  const {setAuthState} = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();
  
  const [clientToken, setClientToken] = useState<string>('');
  const [customerID, setCustomerId] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [success, setSuccess] = useState<PaypalResponse>({
    nonce: '',
    payerId: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
  });
    const [
    billingAgreementDescription,
    setBillingAgreementDescription,
  ] = useState('Vault Acccount to Home Grown');


  // Get Token from server

  const VaultPaypal: Function = async () => {
    console.log(clientToken);
    console.log(customerID);

    // Use react-native-paypal fields to create a payment method nonce which is passed to be vaulted in this case
    // See https://docs-prod-us-east-2.production.braintree-api.com/guides/paypal/vault/android/v3 for intergration
    // @ node_modules\react-native-paypal\android\src\main\java\com\smarkets\paypal\RNPaypalModule.java
    // Have to update installation intrustions for IOS later
     const requestBilling = () =>
    requestBillingAgreement(token, {billingAgreementDescription})
    // nonce is in the success object
      .then(setSuccess)
      .catch((error) => Alert.alert('Paypal Request Failed'));

    // Send nonce to server to be vaulted with success.nonce

  };


  return (
    <View>
      <Button>
        <Image source={{uri: "https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png"}}
          style={{width: 'auto', height: 'auto'}}
        />
      </Button>
    </View>
  )

}

export default VaultPaypal