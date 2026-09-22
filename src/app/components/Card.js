import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Card({
  icon,
  text,
  hasCheckbox = false,
  checked = false,
}) {
  const [isChecked, setChecked] = useState(checked);

  return (
    <LinearGradient
      colors={["#243189", "#1B2565"]}
      style={styles.cardContainer}
    >
      <TouchableOpacity
        style={[styles.content, { opacity: isChecked ? 1 : 0.5 }]}
        onPress={() => setChecked(!isChecked)}
        activeOpacity={0.8}
      >
        <LinearGradient
          style={styles.innerGradient}
          colors={[isChecked ? "#243189" : "#1B2565", "#171F52"]}
        >
          {hasCheckbox && (
            <View style={isChecked ? styles.checkedBox : styles.checkBox} />
          )}

          <Image source={icon} style={styles.image} />
          <Text style={styles.body}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
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
  },
  innerGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  checkBox: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 12,
    height: 12,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#DDE3F0",
    backgroundColor: "transparent",
  },
  checkedBox: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: "#E51C44",
  },
  image: {
    width: 48,
    height: 48,
  },
  body: {
    color: "#DDE3F0",
    marginTop: 8,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Rajdhani-Bold",
  },
});
