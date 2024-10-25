import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LooginScreen";
import { RegistrationScreen } from "../screens/RegestrationScreen";
import { BottomTabNavigator } from "./BottomNavigator";
import { CommentsScreen } from "../screens/CommentsScreen";

import AntDesign from "react-native-vector-icons/AntDesign";

import { COLORS } from "../styles/global";
import { Pressable } from "react-native";
const Stack = createStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen
        name="Comments"
        options={({ navigation }) => ({
          headerTitle: "Коментарі",
          headerShown: true,
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
                style={{ marginLeft: 10 }}
              >
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color={COLORS.primary_text_color}
                />
              </Pressable>
            );
          },
          tabBarStyle: { display: "none" },
        })}
        component={CommentsScreen}
      />
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
