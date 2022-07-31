import React, {useContext} from 'react'
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParam } from '../App';
import { View, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Divider, TextInput, Button, Text } from 'react-native-paper';



const LogInScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();

  const [login, setLogin] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const {setAuthState} = useContext(AuthContext);

  const logIn = async () => {
    const data = { username: login, password: password };
    axios.post("http://localhost:1337/auth/login", data).then(async (response) => {
        if (response.data.error) {
            Alert.alert(response.data.error);
        } else {
            await AsyncStorage.setItem("accessToken", response.data.token);
            // await AsyncStorage.setItem("chatToken", response.data.chatToken);
            await AsyncStorage.setItem("username", login);
            setAuthState(true);
            navigation.navigate("Home");
        }
    });
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 40,
      backgroundColor: 'white'
    }
  });

  return (
    <View style={styles.container}>
      <View style={{width: '80%'}}>
        <TextInput
          mode='outlined'
          underlineColor='#92a54a'
          outlineColor='lightgrey'
          label="Username or Email"
          value={login}
          onChangeText={login => setLogin(login)}
          />
        <TextInput
          mode='outlined'
          outlineColor='lightgrey'
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <Button 
          style={{marginTop: 20}}
          mode='contained'
          onPress={logIn}>
            <Text style={{color: 'white'}}>Log in</Text>
        </Button>      
      </View>
        <Divider style={{marginTop: 30, padding:.5, width: '90%'}}/>
    </View>
  )
}

export default LogInScreen