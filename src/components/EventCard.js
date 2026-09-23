import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EventCard({
  icon,
  title,
  category,
  date,
  user,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.iconWrapper}>
        <Image source={icon} style={styles.icon} />
      </View>

      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.bodyTitle}>{title}</Text>
          <Text style={styles.bodyCategory}>{category}</Text>
        </View>

        <View style={styles.bodyInfo}>
          <View style={styles.infoGroup}>
            <Ionicons name="calendar-clear" size={16} color="#E51C44" />
            <Text style={styles.bodyDate}>{date}</Text>
          </View>

          <View style={styles.infoGroup}>
            <FontAwesome
              name="user"
              size={16}
              color={user === "Anfitrião" ? "#E51C44" : "#32BD50"}
            />
            <Text
              style={[
                styles.bodyUser,
                user === "Anfitrião"
                  ? { color: "#E51C44" }
                  : { color: "#32BD50" },
              ]}
            >
              {user}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    height: 68,
    width: 64,
    borderRadius: 8,
  },
  body: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 12,
    borderBottomColor: "#243189",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingBottom: 12,
  },
  bodyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  bodyInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
  },
  infoGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  bodyTitle: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 18,
    color: "#DDE3F0",
  },
  bodyCategory: {
    fontSize: 13,
    color: "#ABB1CC",
  },
  bodyIcon: {
    height: 16,
    width: 16,
    color: "#E51C44",
  },
  bodyDate: {
    fontSize: 13,
    fontWeight: "500",
    color: "#DDE3F0",
  },
  bodyUser: {
    fontSize: 13,
    fontWeight: "400",
  },
});
