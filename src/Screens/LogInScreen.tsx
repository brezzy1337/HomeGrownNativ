import React, { useContext, useEffect} from 'react'
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParam } from '../App';
import { View, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Divider, TextInput, Button, Text, Portal } from 'react-native-paper';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';



const LogInScreen: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();

  const [login, setLogin] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const {setAuthState} = useContext(AuthContext);
  
  const loginInputRef = React.useRef<any>(null);
  const passwordInputRef = React.useRef<any>(null);
  // const [inputFocus, setInputFocus] = React.useState<string>('login_input')

  useEffect(() => {
      loginInputRef.current.focus();
  }, [])

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
      <View style={{width: '80%', height: '100%'}}>
        {/* automatically select/focus Text */}
        <TextInput
          mode='outlined'
          underlineColor='#92a54a'
          outlineColor='lightgrey'
          label="Username or Email"
          value={login}
          onChangeText={login => setLogin(login)}
          ref={loginInputRef}
          onSubmitEditing={() => (passwordInputRef.current.focus())}
          />
        <TextInput
          mode='outlined'
          outlineColor='lightgrey'
          label="Password"
          value={password}
          ref={passwordInputRef}
          onChangeText={password => setPassword(password)}
        />
          <Button 
            style={{ marginTop: 20, position: 'absolute', bottom: '5%', width: '100%', alignSelf: 'center' }}
            mode='contained'
            onPress={logIn}>
              <Text style={{color: 'white'}}>Log in</Text>
          </Button>      
      </View>
    </View>
  )
}

export default LogInScreen