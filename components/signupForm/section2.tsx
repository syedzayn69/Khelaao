import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import DateOfBirthPicker from "./DateOfBirth";
import { Dropdown } from "react-native-element-dropdown";
import utilFns from "../../utils/signupFns";

const data = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const SectionTwo = ({changePageFn}:any) => {
  const [gender, setGender] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // function nextSection() {
  //   saveFn({
  //     gender,
  //     dateOfBirth,
  //     contactNumber,
  //   });
  // }
  function nextSection() {
    utilFns.storeData(
      {
        gender,
        dateOfBirth,
        contactNumber,
      },
      "sec2"
    );
  }
  contactNumber && nextSection();

  const formatContactNumber = (text: any) => {
    // Remove non-numeric characters and keep only digits
    const cleaned = text.replace(/[^0-9]/g, "");
    // Check if the cleaned input matches the format (###) ###-####
    const match = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/.test(cleaned);
    // console.log(match);

    if (match) {
      // If it matches, format the input as (###) ###-####
      return cleaned;
    }

    // If it doesn't match the format, return the input unchanged
    return;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Contact Number:</Text>
        <TextInput
          style={styles.input}
          value={contactNumber}
          onChangeText={(text) => setContactNumber(formatContactNumber(text))}
          placeholder="(+92) 321 1234567"
          keyboardType="phone-pad"
          autoFocus={true}
        />
        <DateOfBirthPicker onDateChange={setDateOfBirth} />

        <Text style={styles.label}>Gender:</Text>
        <Dropdown
          style={styles.input}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={"Select Gender"}
          value={gender}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setGender(item.value);
            setIsFocus(false);
          }}
        />
        <TouchableOpacity onPress={changePageFn} style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
  },
  label: {
    fontSize: 16,
    margin: 3,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 20,
    padding: 8,
    borderRadius: 10,
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: "#fafafa",
  },
  btn: {
    backgroundColor: "#e78d46",
    borderRadius: 5,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default SectionTwo;
