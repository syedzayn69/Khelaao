import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";

import Header from "../components/profile/header";
import HeadingLine from "../components/loginPage/Heading";
import { StatusBar } from "expo-status-bar";
import UserDetails from "../components/signupForm/userForm";

export default function HelloWorld() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark"></StatusBar>
      <Header HeaderText={"Profile"} />
      <View style={styles.body}>
        <Image
          style={styles.profilePic}
          source={{
            uri: "https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png",
          }}
          alt="profilePic"
        ></Image>
        <Text style={styles.khelaaoHeading}>Profile Details</Text>
        <HeadingLine headingText={"PROFILE"} />
        <UserDetails btnTitle={"Save Edit"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(1,1,1,0.1)",
  },
  body: {
    alignItems: "center",
    flex: 1,
    paddingTop: 20,
  },
  khelaaoHeading: {
    fontSize: 25,
    color: "grey",
    textDecorationLine: "underline",
    textTransform: "uppercase",
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 20,
  },
  profilePic: {
    width: "30%",
    height: "15%",
    borderRadius: 100,
  },
});
