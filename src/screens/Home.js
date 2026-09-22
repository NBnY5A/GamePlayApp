import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import EventCard from "../components/EventCard";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <Background>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <LinearGradient
            colors={["#243189", "#1B2565"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBorder}
          >
            <View style={styles.avatarWraper}>
              <Image
                source={{
                  uri: "https://avatars.githubusercontent.com/u/207286519?v=4",
                }}
                style={styles.avatar}
              />
            </View>
          </LinearGradient>

          <View>
            <Text style={styles.headerText}>
              Olá,{" "}
              <Text style={{ fontFamily: "Rajdhani-Bold" }}>Victor</Text>{" "}
            </Text>
            <Text style={styles.headerSub}>Hoje é dia de vitória </Text>
          </View>

          <TouchableOpacity
            style={[styles.btnWrapper, { height: 48, width: 48 }]}
          >
            <Ionicons name="add" size={24} color={"white"} />
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          <Card
            icon={require("../../../assets/Icon.png")}
            text={"Ranqueada"}
            checked={true}
          />

          <Card
            icon={require("../../../assets/Icon2.png")}
            text={"Duelo 1x1"}
            checked={true}
          />

          <Card
            icon={require("../../../assets/Icon1.png")}
            text={"Diversão"}
            checked={true}
          />

          <Card
            icon={require("../../../assets/Icon.png")}
            text={"Diversão"}
            checked={true}
          />
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTitle}>Partidas agendadas</Text>
          <Text style={styles.bodyInfo}>Total 6</Text>
        </View>

        <View style={styles.events}>
          <EventCard
            icon={require("../../../assets/Game1.png")}
            title={"Lendários"}
            category={"Ranqueada"}
            date={"18/06 às 21:00h"}
            user={"Anfitrião"}
          />
          <EventCard
            icon={require("../../../assets/Game2.png")}
            title={"Yeah, boy"}
            category={"Diversão"}
            date={"23/06 às 19:00h"}
            user={"Visitante"}
          />
          <EventCard
            icon={require("../../../assets/Game3.png")}
            title={"Rumo ao topo"}
            category={"1x1"}
            date={"20/06 às 09:00h"}
            user={"Anfitrião"}
          />
          <EventCard
            icon={require("../../../assets/Game4.png")}
            title={"Bora queimar tudo"}
            category={"Ranqueada"}
            date={"20/06 às 14:40h"}
            user={"Anfitrião"}
          />
          <EventCard
            icon={require("../../../assets/Game5.png")}
            title={"Valorosos"}
            category={"Ranqueada"}
            date={"18/06 às 21:00h"}
            user={"Anfitrião"}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  header: {
    width: "100%",
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gradientBorder: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 2,
  },
  avatarWraper: {
    height: 48,
    width: 48,
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 8,
  },
  headerText: {
    fontFamily: "Rajdhani-Regular",
    color: "#DDE3F0",
    fontSize: 24,
  },
  headerSub: {
    color: "#ABB1CC",
    fontSize: 13,
  },
  btnWrapper: {
    backgroundColor: "#FD0056",
    color: "#DDE3F0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  cardsContainer: {
    marginTop: 40,
    flexDirection: "row",
    gap: 8,
  },
  bodyContainer: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bodyTitle: {
    fontFamily: "Rajdhani-Bold",
    color: "#DDE3f0",
    fontSize: 18,
  },
  bodyInfo: {
    color: "#DDE3F0",
    fontSize: 13,
  },
  events: {
    flex: 1,
    gap: 16,
  },
});
