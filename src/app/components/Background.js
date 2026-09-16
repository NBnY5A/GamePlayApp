import { LinearGradient } from "expo-linear-gradient";

export default function Background({ children }) {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#0E1647", "#0A1033"]}>
      {children}
    </LinearGradient>
  );
}
