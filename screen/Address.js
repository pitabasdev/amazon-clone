import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const Address = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [postalCode, setPostalCode] = useState("");
    return (
        <ScrollView style={{ marginTop: 50 }}>
            <View style={{ height: 50, backgroundColor: "#00CED1" }} />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                    Add a new Address
                </Text>

                <TextInput
                    placeholderTextColor={"black"}
                    placeholder="India"
                    style={{
                        padding: 10,
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        marginTop: 10,
                        borderRadius: 5,
                    }}
                />
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Full name (First and last name)
                    </Text>
                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Enter your name"
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Mobile numebr
                    </Text>

                    <TextInput
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Mobile No"
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Flat,House No,Building,Company
                    </Text>

                    <TextInput
                        value={houseNo}
                        onChangeText={(text) => setHouseNo(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder=""
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Area,Street,sector,village
                    </Text>
                    <TextInput
                        value={street}
                        onChangeText={(text) => setStreet(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder=""
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Landmark</Text>
                    <TextInput
                        value={landmark}
                        onChangeText={(text) => setLandmark(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Eg near hanuman Temple hospital"
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Pincode</Text>

                    <TextInput
                        value={postalCode}
                        onChangeText={(text) => setPostalCode(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Enter Pincode"
                    />
                </View>
                <Pressable
                    // onPress={handleAddAddress}
                    style={{
                        backgroundColor: "#FFC72C",
                        padding: 19,
                        borderRadius: 6,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                    }}
                >
                    <Text style={{ fontWeight: "bold" }}>Add Address</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Address

const styles = StyleSheet.create({})