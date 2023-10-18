import DigitsInput from "react-native-digits-input";
import Btn from "./Btn";
import utils from "../../utils/signupFns";

import { router } from "expo-router";
import { useState } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

export default function () {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [OtpStatus, setOtpStatus] = useState(false);
  const [Otp, setOtp] = useState("");

  const submitFn = () => {
    setOtpStatus(!OtpStatus);
    console.log("Phonenumber", PhoneNumber);
    console.log("OTP", Otp);
    setPhoneNumber("");
    
    const verification = Otp
    verification && router.replace('/Profile')
  };

  return (
    <>
      <Text style={{ fontSize: 16, alignSelf: "center" }}>
        Login In With Phone Number:
      </Text>
      <View style={styles.otp}>
        {OtpStatus ? (
          <DigitsInput
            numberOfDigits={4}
            onCodeChange={(text) => setOtp(text)}
          />
        ) : (
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            autoFocus={true}
            maxLength={14}
            value={PhoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
        )}
      </View>
      <Btn btnFn={submitFn} btnText={OtpStatus ? "Confirm OTP" : "Send OTP"} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    width: 300,
    textAlign: "center",
    borderRadius: 4,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 16,
  },
  otp: {
    marginVertical: 16,
  },
});
