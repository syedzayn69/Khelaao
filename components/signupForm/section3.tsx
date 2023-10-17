import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import saveFn from "../../utils/signupFn";

const playingRoleArr = [
  { label: "Top-order Batter", value: "Top-order Batter" },
  { label: "Middle-order Batter", value: "Top-order Batter" },
  { label: "Wicket-keeper Batter", value: "Wicket-keeper Batter" },
  { label: "Wicket-keeper ", value: "Wicket-keeper " },
  { label: "Bowler", value: "Bowler" },
  { label: "All-Rounder", value: "All-Rounder" },
  { label: "low-order Batter", value: "low-order Batter" },
  { label: "Opening Batter", value: "Opening Batter" },
  { label: "None", value: "none" },
];

const battingStyleArr = [
  { label: "Right-hand Bat", value: "Right-hand Bat" },
  { label: "Left-hand Bat", value: "Left-order Bat" },
];

const bowlingStyleArr = [
  { label: "Right-arm fast", value: "Right-arm fast" },
  { label: "Right-arm medium", value: "Right-arm medium" },
  { label: "Left-arm fast", value: "Left-arm fast" },
  { label: "Slow left-arm orthodox ", value: "Slow left-arm orthodox" },
  { label: "Slow left-arm chinaman", value: "Slow left-arm chinaman" },
  { label: "Right-arm Off Break ", value: "Right-arm Off Break" },
  { label: "Right-arm Leg Break", value: "Right-arm Leg Break" },
  { label: "None", value: "none" },
];

const RegistrationForm = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [playingRole, setPlayingRole] = useState("");
  const [battingStyle, setBattingStyle] = useState("");
  const [bowlingStyle, setBowlingStyle] = useState("");

  function nextSection() {
    saveFn({
      playingRole,
      battingStyle,
      bowlingStyle,
    });
  }
  // Alert.alert("Registeration Successful!");

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Select Roles:</Text>
        <Dropdown
          style={styles.input}
          data={playingRoleArr}
          labelField="label"
          valueField="value"
          placeholder={" Select playing Role"}
          value={playingRole}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setPlayingRole(item.value);
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={styles.input}
          data={battingStyleArr}
          labelField="label"
          valueField="value"
          placeholder={" Select Batting Style"}
          value={battingStyle}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setBattingStyle(item.value);
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={styles.input}
          data={bowlingStyleArr}
          labelField="label"
          valueField="value"
          placeholder={" Select Bowling Style"}
          value={bowlingStyle}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setBowlingStyle(item.value);
            setIsFocus(false);
          }}
        />
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
});

export default RegistrationForm;
