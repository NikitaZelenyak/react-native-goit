import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "../styles/global";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MainBTN } from "../components/Buttons/MainBTN";

import { navigationProps } from "../types/navigationType";
import { Input } from "react-native-elements";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const AddPostScreen = ({ navigation, route }: navigationProps) => {
  const [data, setData] = useState({ description: "", place: "" });
  const photoUri = route?.params?.photoUri;
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [click, setIsClick] = useState(false);

  useEffect(() => {
    if (!click) return;
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  const createPostHandler = () => {
    setIsClick(true);
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          {photoUri ? (
            <Image style={styles.image} source={{ uri: photoUri }} />
          ) : (
            <View>
              <TouchableOpacity
                style={styles.addImage}
                onPress={() =>
                  navigation.navigate("Camera", { photoUri: null })
                }
              >
                <AntDesign
                  name="camera"
                  size={24}
                  color={COLORS.secondary_bg}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Text style={styles.text}>Завантажте фото</Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputsWrapper}>
            <Input
              placeholder="Назва..."
              onChangeText={(value) =>
                setData((prev) => ({ ...prev, description: value }))
              }
            />
            <Input
              onChangeText={(value) =>
                setData((prev) => ({ ...prev, place: value }))
              }
              placeholder="Місцевість..."
              leftIcon={
                <FontAwesome5
                  style={{ marginRight: 4 }}
                  name="map-marker-alt"
                  size={24}
                  color={COLORS.light_text_color}
                />
              }
            />
          </View>
        </KeyboardAvoidingView>
        <MainBTN
          onPress={createPostHandler}
          customTextColor={styles.buttonText}
          customStyles={{
            ...styles.button,
            backgroundColor:
              data.description && data.place
                ? COLORS.main_accent_color
                : COLORS.light_text_color,
          }}
          CTA={"Опубліковати"}
        />
      </View>
      <TouchableOpacity style={styles.removeBTN}>
        <FontAwesome name="trash-o" size={24} color={COLORS.light_text_color} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.main_bg,
    paddingHorizontal: 16,
    paddingTop: 32,
    flex: 1,
    justifyContent: "space-between",
  },

  imageContainer: {
    backgroundColor: COLORS.secondary_bg,
    width: "100%",
    height: "40%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  addImage: {
    backgroundColor: COLORS.main_bg,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    color: COLORS.light_text_color,
    marginTop: 8,
  },

  inputsWrapper: {
    marginTop: 32,
    gap: 16,
  },
  button: {
    marginTop: 48,
  },
  buttonText: {
    color: COLORS.main_bg,
  },

  removeBTN: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary_bg,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 34,
    // width: 60,
  },
});
