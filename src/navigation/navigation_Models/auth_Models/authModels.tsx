import { StackScreenProps } from '@react-navigation/stack';

export type AuthStackParamList = {
  SplashScreen: undefined;
  OnBoardingScreen: undefined;
  LogInScreen: undefined;
  RegisterScreen: undefined;
  AppBottomTopScreen: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = StackScreenProps<
  AuthStackParamList,
  Screen
>;
