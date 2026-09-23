import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import { StatusBar } from "expo-status-bar";

const players = [
  {
    name: "Tiago Luchtenberg",
    status: "Disponível",
    color: "#32BD50",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Rodrigo Gonçalves",
    status: "Ocupado",
    color: "#E51C44",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Diego Fernandes",
    status: "Ocupado",
    color: "#E51C44",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Details() {
  const router = useRouter();

  return (
    <Background>
      <StatusBar style="light" />

      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color="#DDE3F0" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Detalhes</Text>

          <TouchableOpacity>
            <Ionicons name="share-social" size={26} color="#E51C44" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.hero}>
            <ImageBackground
              source={require("../../assets/Game1.png")}
              style={styles.heroImage}
              imageStyle={styles.heroImageStyle}
            >
              <LinearGradient
                colors={["transparent", "#0A1033"]}
                style={styles.heroGradient}
              >
                <Text style={styles.gameTitle}>Lendários</Text>

                <Text style={styles.description}>
                  É hoje que vamos chegar ao challenger sem perder uma partida
                  da md10
                </Text>
              </LinearGradient>
            </ImageBackground>
          </View>

          <View style={styles.playersHeader}>
            <Text style={styles.sectionTitle}>Jogadores</Text>
            <Text style={styles.total}>Total 3</Text>
          </View>

          {players.map((player) => (
            <View style={styles.player} key={player.name}>
              <Image source={{ uri: player.image }} style={styles.avatar} />

              <View>
                <Text style={styles.playerName}>{player.name}</Text>

                <View style={styles.statusContainer}>
                  <View
                    style={[
                      styles.statusDot,
                      { backgroundColor: player.color },
                    ]}
                  />
                  <Text style={styles.status}>{player.status}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.joinButton} activeOpacity={0.8}>
          <View style={styles.discordIcon}>
            <Ionicons name="logo-discord" size={28} color="#FFFFFF" />
          </View>

          <Text style={styles.joinText}>Entrar na partida</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    paddingHorizontal: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1D2766",
  },
  headerTitle: {
    color: "#DDE3F0",
    fontFamily: "Rajdhani-Bold",
    fontSize: 26,
  },
  scrollContent: {
    paddingBottom: 110,
  },
  hero: {
    height: 337,
  },
  heroImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  heroImageStyle: {
    opacity: 0.8,
  },
  heroGradient: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 36,
    paddingBottom: 36,
  },
  gameTitle: {
    color: "#DDE3F0",
    fontFamily: "Rajdhani-Bold",
    fontSize: 34,
  },
  description: {
    color: "#DDE3F0",
    fontSize: 18,
    lineHeight: 30,
    marginTop: 14,
  },
  playersHeader: {
    paddingHorizontal: 36,
    marginTop: 34,
    marginBottom: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    color: "#DDE3F0",
    fontFamily: "Rajdhani-Bold",
    fontSize: 24,
  },
  total: {
    color: "#ABB1CC",
    fontSize: 18,
  },
  player: {
    minHeight: 104,
    paddingHorizontal: 36,
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#1D2766",
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#243189",
  },
  playerName: {
    color: "#DDE3F0",
    fontFamily: "Rajdhani-Bold",
    fontSize: 23,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 6,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  status: {
    color: "#ABB1CC",
    fontSize: 18,
  },
  joinButton: {
    position: "absolute",
    left: 36,
    right: 36,
    bottom: 16,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#E51C44",
    flexDirection: "row",
    alignItems: "center",
  },
  discordIcon: {
    width: 82,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#B71938",
  },
  joinText: {
    flex: 1,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 22,
  },
});
