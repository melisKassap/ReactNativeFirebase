import React from 'react';
import { SafeAreaView, View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {LoginPage, SignUpPage} from './pages_'
const Stack = createStackNavigator();

function Router_() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }} />

                <Stack.Screen
                    name="Sign"
                    component={SignUpPage}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router_;