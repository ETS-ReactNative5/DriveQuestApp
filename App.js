import * as React from 'react'

import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton } from "react-native-paper";

import LogIn from './navigation/screens/LogIn';
import MainHome from './AllScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PreDriveScreen from './navigation/screens/PreDriveScreen';
import Residential from './navigation/screens/Residential'
import TurnScreen from './navigation/screens/FreewayDriving'
import TurnScreenLeft from './navigation/screens/TurnScreenLeft';
<<<<<<< HEAD

=======
import TurnScreenRight from './navigation/screens/TurnScreenRight';
<<<<<<< HEAD
>>>>>>> c893976f866112cb50bcd034a47377fe357e3455
=======
import FreewayLaneChangeScreen from './navigation/screens/FreewayLaneChange'
>>>>>>> 151a717ca2a2c2efcca8994d9935cbf88559e7df


const Stack = createStackNavigator();

const _goBack = () => console.log('Went back');

let isLoggedIn = false;

let chosenScreen = <LogIn />

global.test = true;

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="freelanechange" component={FreewayLaneChangeScreen} />
          <Stack.Screen name="Freeway" component={TurnScreen}/>
          <Stack.Screen name="PreDrive" component={PreDriveScreen} />
          <Stack.Screen name="Home" component={MainHome} />
          <Stack.Screen name="Residential" component={Residential} />
          <Stack.Screen name="turnscreenleft" component={TurnScreenLeft} />
          <Stack.Screen name="turnscreenright" component={TurnScreenRight} />


        </Stack.Navigator>
      </NavigationContainer>

    </PaperProvider>


  );



}


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12414F',
    accent: '#90C96A',
  },
};


export default App;