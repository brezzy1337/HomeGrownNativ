import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParam } from '../App';
import { View, StyleSheet } from 'react-native';
import { Text, Button, withTheme } from 'react-native-paper';
import Logo from '../Assets/logo.svg';
 import Dots from '../Assets/dots.svg';

 export type Props = {
   name: string;
 };

const HeroScreen : React.FC<Props> = () => {

  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white'
      },
      titleText: {
        color: '#92a54a',
        fontSize: 45
      },
      subTitleText: {
        fontSize: 20,
        textAlign: 'center',
      }
    });

    return (
        <View style={styles.container}> 
          <Logo/>
            <Text style={styles.titleText} >
                HomeGrown
            </Text>
            <Text style={styles.subTitleText}>
              Discover and Grow Your Local Food Movement
            </Text >
            <View style={{flexDirection: 'row'}}>
              <Dots/>
              <Dots/>
              <Dots/>
              <Dots/>
              <Dots/>
            </View>
            <View style={{flex: 0, flexDirection: 'row'}}>
              <Button mode='contained'
               onPress={() => navigation.navigate('LogIn')}
               >
                <Text style={{color: 'white'}}>Log in</Text>
              </Button>
              <Button mode='outlined'
               onPress={() => navigation.navigate('SignUp')}
              >
                Sign Up
              </Button>
            </View>
        </View>
    )


}

export default HeroScreen;

