import React, { useState, useEffect, useContext, FC } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParam} from '../../../App';
import { GraphQLClient } from 'graphql-request';
import { NEW_GET_CLIENT_TOKEN } from "./Queries";
import { VAULT_PAYMENT_MEHTOD } from "./Queries";
import braintree from 'braintree-web';
import { View } from 'react-native';

const VaultPaypal: React.FC = () => {

  const {setAuthState} = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();
  
  const [clientToken, setClientToken] = useState<string>('');
  const [customerID, setCustomerId] = useState<string>('');


  const getToken: Function = async () => {
    const endpoint = "https://payments.sandbox.braintree-api.com/graphql";

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `YjJndnlxMmJocHZqeTdtNjozMTAxY2QyMzBiNmI4OWYwMjM0MzAwMWU3NGU5MTM5ZQ==`,
        "Braintree-Version": "2021-05-11",
      },
    });

    const variables = {};

    const data = await graphQLClient.request(NEW_GET_CLIENT_TOKEN, variables);

    console.log(JSON.stringify(data, undefined, 2));

    // setClientToken(data.createClientToken.clientToken, undefined, 2);
    setClientToken(data.createClientToken.clientToken);
    console.log(clientToken);
  }

  const getnonce: Function = () => {
    console.log(clientToken);
    console.log(customerID);

    button.addEventListen('click', function () {
    button.setAttribute('disabled', 'disabled');
    })

    // Use hosted fields to create a payment method nonce which is passed to be vaulted in this case
    braintree.client.create(
      {
        authorization: `${clientToken}`,
      },
      function (clientErr, clientInstance) {
        if (clientErr) {
          console.error("Error creating client:", clientErr);
          return;
        }

        braintree.paypal.create(
          {
            client: clientInstance,
          },
          function (paypalErr, paypalInstance) {
            if (paypalErr) {
              console.error("Error creating PayPal:", paypalErr);
              return;
            }

            paypalButton.removeAttribute("disabled");

            // When the button is clicked, attempt to tokenize.
            paypalButton.addEventListener(
              "click",
              function (event) {
                // Because tokenization opens a popup, this has to be called as a result of
                // customer action, like clicking a button. You cannot call this at any time.
                paypalInstance.tokenize(
                  {
                    flow: "vault",
                    // For more tokenization options, see the full PayPal tokenization documentation
                    // https://braintree.github.io/braintree-web/current/PayPal.html#tokenize
                  },
                  function (tokenizeErr, payload) {
                    if (tokenizeErr) {
                      if (tokenizeErr.type !== "CUSTOMER") {
                        console.error("Error tokenizing:", tokenizeErr);
                      }
                      return;
                    }

                    // Tokenization succeeded
                    paypalButton.setAttribute("disabled", true);
                    console.log(
                      "Got a nonce! You should submit this to your server."
                    );
                    console.log(payload.nonce);
                    vaultPayment(payload.nonce);
                  }
                );
              },
              false
            );
          }
        );
      }
    );
  };


  return (
    <View>

    </View>
  )

}

export default VaultPaypal