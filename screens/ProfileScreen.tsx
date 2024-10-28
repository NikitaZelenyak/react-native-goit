import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { navigationProps } from "../types/navigationType";

import { COLORS } from "../styles/global";

import { RoundedBTN } from "../components/Buttons/RoundedBTN";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LogoutIcon } from "../assets/Icons/LogoutIcon";

export const ProfileScreen = ({ navigation }: navigationProps) => {
  return (
    <View>
      <Image
        resizeMode="cover"
        style={styles.backgroundImage}
        source={require("../assets/images/bg.png")}
      />
      <View style={styles.commonWrapper}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.logoutBTN}
            onPress={() => {
              console.log("Navigating to Login");
              navigation.navigate("Login");
            }}
          >
            <LogoutIcon style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <View style={styles.avatarBoxWrapper}>
            <View style={styles.avatarPlaceholder}>
              <Image
                style={styles.imageAvatar}
                source={require("../assets/images/Rectangle 22.png")}
              />
              <View style={styles.rounderBTNWrapper}>
                <RoundedBTN />
              </View>
            </View>
          </View>

          <Text style={styles.title}>Natali Romanova</Text>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/images/Forest.png")}
            />
            <Text style={styles.subTitle}>Ліс</Text>
            <View style={styles.infoWrapper}>
              <View style={styles.infoContainer}>
                <View style={styles.elementWrapper}>
                  <Pressable onPress={() => navigation.navigate("Comments")}>
                    <FontAwesome
                      name="comment"
                      color={COLORS.main_accent_color}
                      size={24}
                    />
                  </Pressable>

                  <Text>8</Text>
                </View>
                <View style={styles.elementWrapper}>
                  <AntDesign
                    name="like2"
                    color={COLORS.main_accent_color}
                    size={24}
                  />
                  <Text>815</Text>
                </View>
              </View>

              <View style={styles.elementWrapper}>
                <Pressable onPress={() => navigation.navigate("Map")}>
                  <FontAwesome5
                    style={{ marginRight: 4 }}
                    name="map-marker-alt"
                    size={24}
                    color={COLORS.light_text_color}
                  />
                </Pressable>

                <Text>Ukraine</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commonWrapper: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  container: {
    width: "100%",
    height: "80%",
    backgroundColor: COLORS.main_bg,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
    position: "relative",
  },

  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  avatarBoxWrapper: {
    position: "relative",
    marginTop: -60,
    alignItems: "center",
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.secondary_bg,
    borderRadius: 16,
    position: "relative",
  },
  imageAvatar: {
    position: "absolute",
  },

  rounderBTNWrapper: {
    position: "absolute",
    right: -10,
    bottom: 15,
  },

  logoutBTN: {
    zIndex: 99,
    position: "absolute",
    right: 16,
    top: 22,
  },

  title: {
    marginTop: 32,
    marginBottom: 32,
    fontSize: 30,
    color: COLORS.primary_text_color,
    lineHeight: 36,
    fontWeight: "500",
    textAlign: "center",
  },

  image: {
    borderRadius: 16,
    width: "100%",
  },
  subTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 18,
    color: COLORS.primary_text_color,
  },
  infoWrapper: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    flexDirection: "row",
    gap: 24,
  },
  elementWrapper: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
});
