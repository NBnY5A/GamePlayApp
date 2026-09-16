import { Image, StyleSheet, View } from "react-native";
import Background from "../components/Background";

export default function Splash() {
  return (
    <Background>
      <View style={styles.container}>
        <Image source={require("../../../assets/Group 18.png")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E1647",
    alignItems: "center",
    justifyContent: "center",
  },
});
