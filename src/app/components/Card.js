import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Card({ icon, text }) {
  return (
    <LinearGradient
      colors={["#243189", "#1B2565"]}
      style={styles.cardContainer}
    >
      <View style={styles.content}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.body}>{text}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 104,
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 48,
    height: 48,
  },
  body: {
    color: "#DDE3F0",
    marginTop: 8,
    fontSize: 15,
    fontWeight: "bold",
  },
});
