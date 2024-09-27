import { StackScreenProps } from '@react-navigation/stack';

export type CartStackParamList = {
  CartScreen: undefined;
  OrderSuccessScreen: undefined;
};

export type CartStackScreenProps<Screen extends keyof CartStackParamList> = StackScreenProps<
CartStackParamList,
  Screen
>;