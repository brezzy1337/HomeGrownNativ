import React from 'react'
import { Button, Text } from 'react-native-paper'
import { AuthContext } from '../../Context/AuthContext'

const CashButton: React.FC = () => {

    

  return (
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
    >
        <Text style={{color: 'white'}}>Next</Text>
    </Button>
  )
}
export default CashButton