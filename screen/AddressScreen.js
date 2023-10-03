import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useEffect, useState, useContext } from "react";
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddressScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 50 }}>
            <View
                style={{
                    backgroundColor: "#00CED1",
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 7,
                        gap: 10,
                        backgroundColor: "white",
                        borderRadius: 3,
                        height: 38,
                        flex: 1,
                    }}
                >
                    <AntDesign
                        style={{ paddingLeft: 10 }}
                        name="search1"
                        size={22}
                        color="black"
                    />
                    <TextInput placeholder="Search Amazon.in" />
                </Pressable>

                <Feather name="mic" size={24} color="black" />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Addresses</Text>
                <Pressable
                    onPress={() => navigation.navigate("Add")}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10,
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        paddingVertical: 7,
                        paddingHorizontal: 5,
                    }}
                >
                    <Text>Add a new Address</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </Pressable>
                <Pressable>
                    <Pressable
                        style={{
                            borderWidth: 1,
                            borderColor: "#D0D0D0",
                            padding: 10,
                            flexDirection: "column",
                            gap: 5,
                            marginVertical: 10,
                        }}
                    ></Pressable>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default AddressScreen

const styles = StyleSheet.create({})