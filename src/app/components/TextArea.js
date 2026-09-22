import { TextInput, StyleSheet } from "react-native";

export function TextArea(props) {
  return <TextInput style={styles.container} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 95,
    backgroundColor: "#1D2766",
    color: "#DDE3F0",
    borderRadius: 8,
    fontSize: 13,
    padding: 16,
    borderWidth: 1,
    borderColor: "#243189",
    textAlignVertical: "top",
  },
});
