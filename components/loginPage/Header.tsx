import { StatusBar } from "expo-status-bar";
import { ImageBackground, View ,StyleSheet} from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor="#cc6500"></StatusBar>
      <ImageBackground
        style={styles.bgImage}
        resizeMode="cover"
        source={require("../../assets/images/khelaaoLogo.png")}
      >
        <View style={styles.bgOpaque}></View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 3 / 10,
    width: width,
    shadowColor: "black",
  },
  bgOpaque: {
    flex: 1,
    width: width,
    backgroundColor: "rgba(1,1,1,0.3)",
  }
})

export default Header