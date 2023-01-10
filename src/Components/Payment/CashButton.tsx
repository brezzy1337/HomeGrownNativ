import React, { useContext } from 'react'
import { Button, Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParam } from '../../App' 
import { AuthContext } from '../../Context/AuthContext'

const CashButton: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();
  const {setAuthState} = useContext(AuthContext);


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
        onPress={() => {
          setAuthState(true);
          navigation.navigate("App");
        }}
    >
        <Text style={{color: 'white'}}>Next</Text>
    </Button>
  )
}
export default CashButton