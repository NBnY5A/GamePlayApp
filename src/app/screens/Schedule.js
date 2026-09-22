import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Touchable } from "react-native-gesture-handler";
import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import Background from "../components/Background";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import { SmallInput } from "../components/SmallInput";
import { TextArea } from "../components/TextArea";

export default function Schedule() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Background>
        <TopBar title={"Agendar partida"} />

        <ScrollView style={styles.container}>
          <View>
            <Text style={[styles.label, { marginBottom: 18 }]}>Categoria</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 40 }}
            >
              <View style={styles.cardsContainer}>
                <Card
                  icon={require("../../../assets/Icon.png")}
                  text={"Ranqueada"}
                  hasCheckbox={true}
                />
                <Card
                  icon={require("../../../assets/Icon2.png")}
                  text={"Duelo 1x1"}
                  hasCheckbox={true}
                />
                <Card
                  icon={require("../../../assets/Icon1.png")}
                  text={"Diversão"}
                  hasCheckbox={true}
                />

                <Card
                  icon={require("../../../assets/Icon1.png")}
                  text={"Diversão"}
                  hasCheckbox={true}
                />
              </View>
            </ScrollView>
          </View>

          <View style={styles.form}>
            <Touchable onPress={() => {}}>
              <View style={styles.select}>
                <Image source={require("../../../assets/Game5.png")} />
                <View style={styles.selectBody}>
                  <Text style={styles.label}>Selecione um servidor</Text>
                </View>
                <Feather name="chevron-right" color={"#DDE3F0"} size={18} />
              </View>
            </Touchable>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} onChangeText={setMonth} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} onChangeText={setMinute} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />

            <View style={styles.footerContainer}>
              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Agendar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 26,
  },
  cardsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  label: {
    fontSize: 18,
    color: "#DDE3F0",
  },
  form: {
    marginTop: 32,
    marginBottom: 56,
  },
  select: {
    width: "100%",
    height: 68,
    flexDirection: "row",
    borderColor: "#243189",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    paddingRight: 25,
    overflow: "hidden",
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  imagePlaceholder: {
    width: 64,
    height: 68,
    backgroundColor: "#1D2766",
  },
  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: 4,
    marginLeft: 4,
    fontSize: 15,
    color: "#ABB1CC",
  },
  caracteresLimit: {
    fontSize: 13,
    color: "#ABB1CC",
  },
  footerContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 56,
    backgroundColor: "#E51C44",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#DDE3F0",
    fontSize: 15,
    fontWeight: "bold",
  },
  footer: {
    marginVertical: 20,
    alignItems: "center",
  },
});
