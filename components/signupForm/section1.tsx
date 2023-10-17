import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import utilFns from "../../utils/signupFns";
import { ScrollView } from "react-native-gesture-handler";

const Areas = [
  { label: "Gulberg", value: "Gulberg" },
  { label: "Liaquatabad", value: "Liaquatabad" },
  { label: "Nazimabad", value: "Nazimabad" },
  { label: "New Karachi", value: "New Karachi" },
  { label: "North Nazimabad", value: "North Nazimabad" },
  { label: "Ferozabad", value: "Ferozabad" },
  { label: "Gulshan-e-Iqbal", value: "Gulshan-e-Iqbal" },
  { label: "Gulzar-e-Hijri", value: "Gulzar-e-Hijri" },
  { label: "Jamshed Quarters", value: "Jamshed Quarters" },
  { label: "Aram Bagh", value: "Aram Bagh" },
  { label: "Civil Line", value: "Civil Line" },
  { label: "Garden", value: "Garden" },
  { label: "Lyari", value: "Lyari" },
  { label: "Saddar", value: "Saddar" },
  { label: "Mango Pir", value: "Mango Pir" },
  { label: "Mominabad", value: "Mominabad" },
  { label: "Orangi", value: "Orangi" },
  { label: "Harbour", value: "Harbour" },
  { label: "Mauripur", value: "Mauripur" },
  { label: "Airport", value: "Airport" },
  { label: "Bin Qasim", value: "Bin Qasim" },
  { label: "Gadap", value: "Gadap" },
  { label: "Ibrahim Hyderi", value: "Ibrahim Hyderi" },
  { label: "Murad Memon", value: "Murad Memon" },
  { label: "Korangi", value: "Korangi" },
  { label: "Bin Qasim", value: "Landhi" },
  { label: "Model Colony", value: "Model Colony" },
  { label: "Shah Faisal", value: "Shah Faisal" },
];

const SectionOne = ({changePageFn}:any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [area, setArea] = useState("");

  // function nextSection() {
  //   utilFns.storeData(
  //     {
  //       name,
  //       email,
  //       area,
  //     },
  //     "sec1"
  //   );
  // }
  // area && nextSection();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          autoFocus={true}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Area:</Text>
        <Dropdown
          style={styles.input}
          data={Areas}
          labelField="label"
          valueField="value"
          placeholder={"Select Area"}
          search={true}
          value={area}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setArea(item.value);
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
    marginBottom: 3,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 16,
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

export default SectionOne;
