import { useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";

export default function () {
  const [value, setvalue] = useState('');
  return (
    <>
      <Text>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        autoFocus={true}
        maxLength={14}
        onChangeText={(e) => {
          setvalue(e);
          console.log(value)
        }}
        keyboardType="numeric"
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 100,
    borderRadius: 4,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 16,
  },
});
