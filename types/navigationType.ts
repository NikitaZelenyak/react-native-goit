import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Main: undefined;
  Home: undefined;
  Comments: undefined;
};

// Define the navigation prop type for LoginScreen
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export type navigationProps = {
  navigation: LoginScreenNavigationProp;
};
