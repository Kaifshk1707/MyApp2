import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../bottoms/Home';
import Search from '../bottoms/Search';
import Group from '../bottoms/Group';
import Chats from '../bottoms/Chats';
import Profile from '../bottoms/Profile';
import { THEMES_COLOR } from './Colors';

const Tab = createBottomTabNavigator();

const Bottoms = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: THEMES_COLOR,
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size }) => {
                    const icons = {
                        Qoneqt: 'home',
                        Search: 'search',
                        Group: 'group',
                        Chats: 'comments',
                        Profile: 'user',
                    };
                    const iconName = icons[route.name];
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="Qoneqt"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Group"
                component={Group}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Chats"
                component={Chats}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: true,
                    headerTintColor: THEMES_COLOR,
                }}
            />
        </Tab.Navigator>
    );
};

export default Bottoms;
