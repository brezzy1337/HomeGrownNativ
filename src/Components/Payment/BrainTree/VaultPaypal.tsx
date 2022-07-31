import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import { GraphQLClient } from 'graphql-request';
import { NEW_GET_CLIENT_TOKEN } from "./Queries";
import { VAULT_PAYMENT_MEHTOD } from "./Queries";

const VaultPaypal = () => {
  return (
    <div>VaultPaypal</div>
  )
}

export default VaultPaypal