import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "../styles/global";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MainBTN } from "../components/Buttons/MainBTN";

import { Input } from "react-native-elements";

export const AddPostScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <View>
            <View style={styles.addImage}>
              <AntDesign name="camera" size={24} color={COLORS.secondary_bg} />
            </View>
          </View>
        </View>
        <Text style={styles.text}>Завантажте фото</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputsWrapper}>
            <Input placeholder="Назва..." />
            <Input
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
          customTextColor={styles.buttonText}
          customStyles={styles.button}
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
    backgroundColor: COLORS.secondary_bg,
  },
  buttonText: {
    color: COLORS.light_text_color,
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
