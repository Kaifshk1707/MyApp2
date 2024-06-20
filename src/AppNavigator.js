import { } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/Main';
import Started from './screens/Started';
import MyDetails from './screens/MyDetails';
import Menu from './screens/Menu';
import DestinationScreen from './screens/DestinationScreen';
import First from './screens/Splash/First';
import Second from './screens/Splash/Second';
import Third from './screens/Splash/Third';
import Fourth from './screens/Splash/Fourth';
import UserProfile from './screens/UserProfile';
import ShowDetails from './modals/ShowDetails';
import Message from './modals/Message';
import Report from './modals/Report';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="First"
          component={First}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Third"
          component={Third}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fourth"
          component={Fourth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Started"
          component={Started}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyDetails"
          component={MyDetails}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DestinationScreen"
          component={DestinationScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ShowDetails"
          component={ShowDetails}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{ headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;