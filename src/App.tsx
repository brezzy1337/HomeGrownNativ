import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
// import {trpc} from './utils/trpc';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from './Context/AuthContext';
import HeroScreen from './Screens/HeroScreen';
import LogInScreen from './Screens/LogInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import HomeScreen from './Screens/HomeScreen';
import StoreScreen from './Screens/StoreScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
export type Props = {
  name: string;
};

export type StackParam = {
  Hero: undefined;
  LogIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

// interface navBarInterface {
//   name: string | undefined
// }

const App: React.FC<Props> = ({name}) => {
  const [queryClient] = useState(() => new QueryClient());
  // const [trpcClient] = useState(() =>
  //   trpc.createClient({
  //     url: 'http://localhost:1337/trpc',
  //   }),
  // );

  const Stack = createNativeStackNavigator<StackParam>();

  const [authState, setAuthState] = React.useState<boolean>(false);

  const Tab = createMaterialBottomTabNavigator();
  // const [backArrow, setBackArrow] = React.useState(false);

  // const backArrowIcon = Icon.getImageSource('chevron-back-outline', 20, 'red').then(source =>
  //   setBackArrow(source));

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#92a54a',
      onPrimary: 'white',
      secondary: '#ffffff',
      onSurfaceVariant: '#ffffff',
      outline: '#ffffff',
      background: '#ffffff',
      onBackground: '#ffffff',
      surface: '#ffffff',
      onSurface: '#ffffff',
    },
    version: 3,
  };

  return (
    // <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{authState, setAuthState}}>
          <NavigationContainer>
            <PaperProvider theme={theme}>
              <Stack.Navigator>
                {!authState && (
                  <>
                    <Stack.Screen
                      name="Hero"
                      component={HeroScreen}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name="LogIn"
                      component={LogInScreen}
                      options={{
                        title: 'Log In',
                        headerStyle: {
                          backgroundColor: '#ffffff',
                        },
                        headerTitleStyle: {
                          color: '#92a54a',
                        },
                        headerTitleAlign: 'center',
                        // headerBackImageSource​: backArrow
                      }}
                    />
                    <Stack.Screen
                      name="LogIn"
                      component={SignUpScreen}
                      options={{
                        title: 'Sign Up',
                        headerStyle: {
                          backgroundColor: '#ffffff',
                        },
                        headerTitleStyle: {
                          color: '#92a54a',
                        },
                        headerTitleAlign: 'center',
                        // headerBackImageSource​: backArrow
                      }}
                    />
                  </>
                )}
                {authState && (
                  <>
                    <Tab.Navigator
                      screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color}) => {
                          let iconName = 'Home';

                          if (route.name === 'Home') {
                            iconName = focused
                              ? 'ios-home'
                              : 'ios-home-outline';
                          } 
                          else if (route.name === 'Store') {
                            iconName = focused
                              ? 'ios-cart'
                              : 'ios-cart-outline';
                          }

                          return <Ionicons name={iconName} color={color}/>;
                        },
                        tabBarActiveTintColor: '#92a54a',
                        tabBarInactiveTintColor: 'gray',
                      })}
                    >
                      <Tab.Screen name='Home' component={HomeScreen}/>
                      <Tab.Screen name='Store' component={StoreScreen}/>
                      {/* <Tab.Screen name='Search' component={SearchScreen}/>
                      <Tab.Screen name='Profile' component={ProfileScreen}/> */}
                    </Tab.Navigator>
                  </>
                )}
              </Stack.Navigator>
            </PaperProvider>
          </NavigationContainer>
        </AuthContext.Provider>
      </QueryClientProvider>
    // </trpc.Provider>
  );
};

export default App;
