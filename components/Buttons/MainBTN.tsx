import { FC } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { COLORS } from "../../styles/global";

interface MainBTNProps {
  CTA: string;
}

export const MainBTN: FC<MainBTNProps> = ({ CTA }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => alert("Button Pressed!")}
    >
      <Text style={styles.CTAText}>{CTA}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.main_accent_color,
    paddingVertical: 16,
    borderRadius: 100,
  },
  CTAText: {
    fontSize: 16,
    color: COLORS.secondary_text_color,
    fontWeight : "400",
    lineHeight: 19,
    textAlign: "center",
  },
});
