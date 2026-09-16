import { StyleSheet, View, Text, Image } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/Group 24.png")}
        style={styles.image}
      />

      {/* TODO: Corrigir bug visual no meio da tela */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}e organize suas {"\n"}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games favoritos com os seus amigos
        </Text>

        <View style={styles.footer}>
          <Text>Entrar com Discord</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1033",
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
    fontFamily: "Rajdhani-Regular",
    fontWeight: "700",
    lineHeight: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: "#ABB4D2",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Inter-Regular",
    fontWeight: "400",
    lineHeight: 25,
    marginBottom: 64,
  },
  footer: {
    width: "100%",
    alignItems: "center",
  },
});
