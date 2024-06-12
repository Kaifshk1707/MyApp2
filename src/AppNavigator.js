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

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Started" component={Started} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="MyDetails" component={MyDetails} options={{ headerShown: false }} />
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
                <Stack.Screen name="DestinationScreen" component={DestinationScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigator;