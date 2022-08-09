import React, { useState, useEffect, useContext, FC } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParam} from '../../../App';


//use hosted field to vault card to braintree
const VaultCard: React.FC = () => {
  return (
    <div>VaultCard</div>
  )
}

export default VaultCard