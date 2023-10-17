import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SignupForm from './section1'

export default function () {
  return (
    <ScrollView style={styles.boxHeadingContainer}>
      <SignupForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  boxHeading: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "grey",
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
