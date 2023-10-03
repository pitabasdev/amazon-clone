import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import HomeScreen from '../screen/HomeScreen';
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductInfo from '../screen/ProductInfo';
import AddressScreen from '../screen/AddressScreen';
import Address from '../screen/Address';
const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home",
                        tabBarLabelStyle: { color: "#008E97" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Entypo name="home" size={24} color="#008E97" />
                            ) : (
                                <AntDesign name="home" size={24} color="black" />
                            ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarLabelStyle: { color: "#008E97" },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="person" size={24} color="#008E97" />
                            ) : (
                                <Ionicons name="person-outline" size={24} color="black" />
                            ),
                    }}
                />

                <Tab.Screen
                    name="Cart"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Cart",
                        tabBarLabelStyle: { color: "#008E97" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <AntDesign name="shoppingcart" size={24} color="#008E97" />
                            ) : (
                                <AntDesign name="shoppingcart" size={24} color="black" />
                            ),
                    }}
                />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
                <Stack.Screen options={{ headerShown: false }} name='Main' component={BottomTabs} />
                <Stack.Screen options={{ headerShown: false }} name='ProductInfo' component={ProductInfo} />
                <Stack.Screen options={{ headerShown: false }} name='Address' component={AddressScreen} />
                <Stack.Screen options={{ headerShown: false }} name='Add' component={Address} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})