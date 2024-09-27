import { StackScreenProps } from '@react-navigation/stack';

export type GuideStackParamList = {
  GuideScreen: undefined;
};

export type GuideStackScreenProps<Screen extends keyof GuideStackParamList> = StackScreenProps<
GuideStackParamList,
  Screen
>;