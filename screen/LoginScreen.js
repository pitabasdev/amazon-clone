import { View, Text, SafeAreaView, StyleSheet, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigation = useNavigation();
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem("authToken");
                if (token) {
                    navigation.replace("Main");
                }
            } catch (err) {
                console.log("error message", err);
            }
        };
        checkLoginStatus();
    }, []);
    const handleData = async () => {
        const user = {
            email: email,
            password: password,
        };
        if (user.email == '' || user.password == '') {
            Alert.alert("Please fill all the fields")
        } else {


            try {
                const response = await fetch("http://192.168.233.1:8000/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });

                if (!response.ok) {
                    // throw new Error('Login failed');
                    Alert.alert("Login Failed,Check Entered Details!!");
                } else {
                    Alert.alert("Login Successfully")
                }

                const data = await response.json();
                const token = data.token;

                AsyncStorage.setItem("authToken", token);
                navigation.replace("Main");
            } catch (error) {
                alert("Login Error", "Invalid Email");
                console.log(error);
            }
        }
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center", marginTop: 50 }}>
            <View>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "bold",
                            marginTop: 12,
                            color: "#041E42",
                        }}
                    >
                        Login In to your Account
                    </Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        backgroundColor: "#D0D0D0",
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 30,
                    }}>
                        <MaterialIcons style={{ marginLeft: 8, color: "gray" }} name="email" size={24} color="black"></MaterialIcons>
                        <TextInput
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: email ? 16 : 16,
                                height: 20
                            }}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder='Enter Your Email'></TextInput>
                    </View>

                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        backgroundColor: "#D0D0D0",
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 30,
                    }}>
                        <AntDesign
                            name="lock1"
                            size={24}
                            color="gray"
                            style={{ marginLeft: 8 }}
                        />
                        <TextInput
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: password ? 16 : 16,
                                height: 20
                            }}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder='Enter Your Password'></TextInput>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 12,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: "500" }}>
                        Forgot Password
                    </Text>
                </View>
                <View style={{ marginTop: 50 }} />
                <Pressable
                    onPress={handleData}
                    style={{
                        width: 200,
                        backgroundColor: "#FEBE10",
                        borderRadius: 6,
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: 15,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}
                    >Login</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate("Register")}
                    style={{ marginTop: 15 }}
                >
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                        Don't have an account? Sign Up
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

// const styles=StyleSheet.create({

// })
export default LoginScreen