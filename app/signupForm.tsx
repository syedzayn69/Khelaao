import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import Footer from "../components/loginPage/Footer";
import Section1 from "../components/signupForm/signupForm";
import Section2 from "../components/signupForm/section2";
import Section3 from "../components/signupForm/section3";
import HeadingLine from "../components/loginPage/Heading";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignUpForm() {
  const [page, setPage] = useState("sec1");

  const nextSection = () => {
    if (page === "sec1") setPage("sec2");
    if (page === "sec2") setPage("sec3");
    if (page === "sec2") setPage("sec3");
    if (page === "sec3") {
      setPage("sec1");
      console.log("end");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"black"} />
      <View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.innerContain}>
              <ImageBackground
                style={styles.bgImage}
                resizeMode="contain"
                source={require("../assets/images/khelaaoPNG.png")}
              />
              <HeadingLine headingText={"REGISTER"} />
              {page === "sec1" ? <Section1 /> : null}
              {page === "sec2" ? <Section2 /> : null}
              {page === "sec3" ? <Section3 /> : null}
              <TouchableOpacity onPress={nextSection} style={styles.btn}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(1,1,1,0.1)",
    flexDirection: "row",
  },
  body: {
    alignItems: "center",
    flex: 1,
    paddingTop: 20,
  },
  bgImage: {
    height: 100,
    width: 150,
    shadowColor: "black",
  },
  innerContain: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    padding: 15,
    borderRadius: 20,

  },
  btn: {
    backgroundColor: "skyblue",
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
