import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { StyleSheet } from "react-native";

export default function TopBar({ title }) {
  const router = useRouter();
  return (
    <LinearGradient style={styles.container} colors={["#1D2766", "#171F52"]}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <AntDesign name="arrow-left" size={24} color={"white"} />
        </TouchableWithoutFeedback>
        <Text style={styles.title}>{title}</Text>
        <View />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 15,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Rajdhani-Bold",
    color: "#DDE3F0",
    fontSize: 20,
    textAlign: "center",
    marginRight: 16,
  },
});
