import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './AppScreens/HomeScreen';
import StoreScreen from './AppScreens/StoreScreen';
import MapScreen from './AppScreens/MapScreen';
import MessengerScreen from './AppScreens/MessengerScreen';
import AccountScreen from './AppScreens/AccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppScreen: React.FC = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
          initialRouteName='Home'
          activeColor='#92A54A'
          inactiveColor='#adadad'
          barStyle={{backgroundColor: 'white', borderTopColor: '#92A54A', borderTopWidth: 1}}
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({focused, color}) => {
            let iconName = 'Home';

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              return <Ionicons name={iconName} color={color} size={20}/>;
            } else if (route.name === 'Store') {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
              return <Ionicons name={iconName} color={color} size={20}/>;
            } else if (route.name === 'Map') {
              iconName = focused ? 'ios-map' : 'ios-map-outline';
              return <Ionicons name={iconName} color={color} size={20}/>;
            } else if (route.name === 'Messenger') {
              iconName = focused ? 'messenger' : 'messenger-outline';
              return <MaterialIcon name={iconName} color={color} size={20}/>;
            } else if (route.name === 'Account') {
              iconName = focused ? 'account-circle' : 'account-circle-outline';
              return <MaterialCommunityIcon name={iconName} color={color} size={20}/>;
            }
          },
          tabBarActiveTintColor: '#92a54a',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Messenger" component={MessengerScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </>
  );
};

export default AppScreen;
