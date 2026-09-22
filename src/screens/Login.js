import { FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function Login() {
  return (
    <Background>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image
          source={require("../../../assets/Group 24.png")}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games favoritos com os seus amigos
          </Text>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.loginBtn} activeOpacity={0.7}>
              <View style={styles.iconWrapper}>
                <FontAwesome6
                  name="discord"
                  size={24}
                  color="white"
                  style={styles.btnIcon}
                />
              </View>

              <Text style={styles.btnText}>Entrar com Discord</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    paddingHorizontal: 40,
    marginTop: -40,
  },
  title: {
    color: "#DDE3F0",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Rajdhani-Bold",
    lineHeight: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: "#ABB4D2",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 25,
    marginBottom: 64,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    flexDirection: "row",
    backgroundColor: "#E51C44",
    width: "100%",
    alignItems: "center",
    height: 56,
    borderRadius: 8,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#991F36",
  },
  btnText: {
    fontSize: 16,
    marginHorizontal: 28,
    fontWeight: "bold",
    color: "#DDE3F0",
  },
});
