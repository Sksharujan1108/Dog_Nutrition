import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

import { styles } from "./styles";
import { ColorSheet } from "@/utlis/ColorSheet";

interface SearchInputProps {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string | undefined;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (text: string) => void;
  onPressClose?: () => void;
}
const SearchInput = (props: SearchInputProps) => {
  const {
    style,
    placeholder,
    value,
    onFocus,
    keyboardType,
    onBlur,
    onChangeText,
    onPressClose,
  } = props;

  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container,style]}>
      {/* Search Icon */}
      <AntDesign name="search1" size={24} color={ColorSheet.White} />
      {/* Input */}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={ColorSheet.SearchText}
        onChangeText={onChangeText}
        value={value}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onEndEditing={(e) => {
          setFocused(false);
        }}
        onBlur={onBlur}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      {/* CloseIcon */}
      {value?.length > 0 && (
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={0.6}
          onPress={onPressClose}
        >
          <AntDesign
            name="closecircle"
            size={20}
            color={ColorSheet.InputText}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
