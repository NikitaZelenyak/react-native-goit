import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useState } from "react";

import { COLORS } from "../styles/global";
import { Input } from "../components/Inputs/Input";
import { RoundedBTN } from "../components/Buttons/RoundedBTN";
import { MainBTN } from "../components/Buttons/MainBTN";
import { OnlyTextBTN } from "../components/Buttons/OnlyTextBTN";

export const RegistrationScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handlerSecureTextEntry = () => {
    setSecureTextEntry(() => !secureTextEntry);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Image
          resizeMode="cover"
          style={styles.backgroundImage}
          source={require("../assets/images/bg.png")}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.commonWrapper}
        >
          <View style={styles.container}>
            <View style={styles.avatarBoxWrapper}>
              <View style={styles.avatarPlaceholder}>
                <View style={styles.rounderBTNWrapper}>
                  <RoundedBTN />
                </View>
              </View>
            </View>

            <Text style={styles.title}>Реєстрація</Text>

            <View style={styles.inputsWrapper}>
              <Input placeholder="Логін" />
              <Input placeholder="Адреса електронної пошти" />
              <Input
                secureTextEntry={secureTextEntry}
                placeholder="Пароль"
                style={styles.customInputStyles}
                additionalContent={
                  <OnlyTextBTN
                    CTA={secureTextEntry ? "Показати" : "Hide"}
                    onPress={handlerSecureTextEntry}
                  />
                }
              />
            </View>

            <View style={styles.buttonWrapper}>
              <MainBTN CTA={"Зареєстуватися"} />
              <OnlyTextBTN CTA="Вже є акаунт? Увійти" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
    height: "65%",
    backgroundColor: COLORS.main_bg,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
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
  },

  rounderBTNWrapper: {
    position: "absolute",
    right: -10,
    bottom: 15,
  },

  title: {
    marginTop: 32,
    fontSize: 30,
    color: COLORS.primary_text_color,
    lineHeight: 36,
    fontWeight: "500",
    textAlign: "center",
  },

  inputsWrapper: {
    gap: 16,
    marginTop: 32,
  },

  buttonWrapper: {
    marginTop: 42,
    gap: 16,
  },

  customInputStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
