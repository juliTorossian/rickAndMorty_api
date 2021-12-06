import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from '../screens/HomeScreen';
import PersonajeListScreen from '../screens/PersonajeListScreen';
import LugarListScreen from '../screens/LugarListScreen';
import CapituloListScreen from '../screens/CapituloListScreen';
import PersonajeScreen from '../screens/PersonajeScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen 
                    name = 'Home'
                    component = { HomeScreen }
                    options={{
                        headerTitle: 'Rick and Morty API',
                        headerTintColor: '#E2E25A',
                        headerStyle: {
                            backgroundColor: '#141414',
                        }
                    }}
                />
                <Stack.Screen 
                    name = 'Personajes'
                    component = { PersonajeListScreen }
                    options={{
                        headerStyle: {
                            backgroundColor: '#4F892D'
                        }
                    }}
                />
                <Stack.Screen 
                    name = 'Lugares'
                    component = { LugarListScreen }
                    options={{
                        headerStyle: {
                            backgroundColor: '#4F892D'
                        }
                    }}
                />
                <Stack.Screen 
                    name = 'Capitulos'
                    component = { CapituloListScreen }
                    options={{
                        headerStyle: {
                            backgroundColor: '#4F892D'
                        }
                    }}
                />
                <Stack.Screen 
                    name = 'Personaje'
                    component = { PersonajeScreen }
                    options={{
                        headerStyle: {
                            backgroundColor: '#4F892D'
                        }
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;