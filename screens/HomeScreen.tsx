import { Text, View, StyleSheet, Image } from "react-native";

import { COLORS } from "../styles/global";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image
          style={styles.image}
          source={require("../assets/images/Rectangle 22.png")}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.main_bg,
    paddingHorizontal: 16,
    paddingTop: 32,
    flex: 1,
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image: {
    borderRadius: 16,
    width: 60,
    height: 60,
  },
  userName: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 15,
  },
  userEmail: {
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 13,
  },
});
