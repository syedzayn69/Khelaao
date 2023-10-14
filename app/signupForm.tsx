import { Text, View, SafeAreaView, StyleSheet,  } from "react-native";
import Header from "../components/loginPage/Header";
import Footer from "../components/loginPage/Footer";
import Form from "../components/signupForm/signupForm"
import HeadingLine from "../components/loginPage/Heading"

export default function HelloWorld() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <View style={styles.body}>
          <Text style={styles.khelaaoHeading}>Welcome to Khelaao!</Text>
        <HeadingLine headingText={"REGISTER"} />
          <Form />
        </View>
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
    flex: 8 / 10,
    paddingTop: 20,
  },
  khelaaoHeading:{
    fontSize:25,
    color:'grey',
    textDecorationLine:'underline',
    textTransform:'uppercase',
    fontWeight:'600',
  
    marginTop:20,
    marginBottom:20,

  }
});
