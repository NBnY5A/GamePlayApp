import { TextInput, StyleSheet } from "react-native";

export function SmallInput(props) {
  return (
    <TextInput style={styles.container} keyboardType="numeric" {...props} />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: "#1D2766",
    color: "#DDE3F0",
    borderRadius: 8,
    fontSize: 18,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#243189",
  },
});
