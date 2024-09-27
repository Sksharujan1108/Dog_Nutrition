import { StackScreenProps } from '@react-navigation/stack';

export type HomeStackParamList = {
  HomeScreen: undefined;
  HomeDetailsScreen: undefined;
};

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> = StackScreenProps<
HomeStackParamList,
  Screen
>;