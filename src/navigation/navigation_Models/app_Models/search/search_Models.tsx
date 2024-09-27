import { StackScreenProps } from '@react-navigation/stack';

export type SearchStackParamList = {
  SearchScreen: undefined;
};

export type SearchStackScreenProps<Screen extends keyof SearchStackParamList> = StackScreenProps<
SearchStackParamList,
  Screen
>;