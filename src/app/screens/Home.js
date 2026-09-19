import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <Background>
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
              Olá, <Text style={{ fontWeight: "bold" }}>Victor</Text>{" "}
            </Text>
            <Text style={styles.headerSub}>Hoje é dia de vitória </Text>
          </View>

          <TouchableOpacity
            style={[styles.btnWrapper, { height: 48, width: 48 }]}
          >
            <Ionicons name="add" size={24} color={"white"} />
          </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
    gap: 28,
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
});
