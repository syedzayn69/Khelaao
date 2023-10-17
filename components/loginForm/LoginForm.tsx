import { router } from "expo-router";
import { useState } from "react";
import { TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function () {
  const [PhoneNumber, setPhoneNumber] = useState("");

  const submitFn = () => {
    console.log(PhoneNumber);
    setPhoneNumber("");
    router.replace('/Profile')
  };

  return (
    <>
      <Text style={{ fontSize: 16, alignSelf: "flex-start" }}>
        Login In With Phone Number:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        autoFocus={true}
        maxLength={14}
        value={PhoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={submitFn} style={styles.loginBtn}>
        <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    width: "100%",
    textAlign: "center",
    borderRadius: 4,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 16,
  },
  loginBtn: {
    marginVertical: 30,
    width: "100%",
    backgroundColor: "#e78d46",
    alignItems: "center",
    padding: 10,
  },
});
