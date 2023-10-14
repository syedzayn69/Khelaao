import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
export default function () {
  const [value, setvalue] = useState("");
  return (
    <ScrollView style={styles.boxHeadingContainer}>
      <Text style={styles.boxHeading}>Username:</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        autoFocus={true}
        onChangeText={(e) => {
          setvalue(e);
          console.log(value);
        }}
        keyboardType='default'
      />

      <Text style={styles.boxHeading}>Phone Number:</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        maxLength={14}
        onChangeText={(e) => {
          setvalue(e);
          console.log(value);
        }}
        keyboardType="numeric"
      />

      <Text style={styles.boxHeading}>Email:</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(e) => {
          setvalue(e);
          console.log(value);
        }}
        keyboardType='email-address'
      />

      <Text style={styles.boxHeading}>Location:</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your area name"
        onChangeText={(e) => {
          setvalue(e);
          console.log(value);
        }}
        keyboardType='default'
      />

      <Text style={styles.boxHeading}>DOB:</Text>
      <Text style={styles.boxHeading}>Playing Role:</Text>
      <Text style={styles.boxHeading}>Batting style:</Text>
      <Text style={styles.boxHeading}>Bowling style:</Text>
      <Text style={styles.boxHeading}>Gender:</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  boxHeading: {
    marginLeft:10,
    fontWeight:"bold",
    color:'grey'
  },
  boxHeadingContainer: {
    width: "80%",
  },
  input: {
    margin: 10,
    marginBottom: 50,
    height: 34,
    width: "90%",
    textAlign: "center",
    borderRadius: 4,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 16,
  },
});
