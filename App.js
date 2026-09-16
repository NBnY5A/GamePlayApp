import { Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.brandTitle}>GamePlay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E1647",
    alignItems: "center",
    justifyContent: "center",
  },
  brandTitle: {
    fontFamily: "Rajdhani_700Bold",
    fontSize: 64,
    color: "#fff",
  },
});
