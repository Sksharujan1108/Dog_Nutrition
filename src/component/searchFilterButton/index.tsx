import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ColorSheet } from "@/utlis/ColorSheet";
import { styles } from "./styles";

interface SearchFilterButtonProps {
  data: {
    id: number;
    title: string;
  }[];
  onPress: (item: { id: number; title: string }) => void;
  numColumns: number;
  selectedId: number | null; // New prop for selected ID
}

const SearchFilterButton  = (props: SearchFilterButtonProps) => {

  const {
    data,
    onPress,
    numColumns,
    selectedId,
  } = props;

  return (
    <View>
      <FlatList
        numColumns={numColumns}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedId; // Check if item is selected
          return (
            <TouchableOpacity
              style={[
                styles.container,
                {
                  backgroundColor: isSelected ? ColorSheet.Secondary : ColorSheet.White,
                },
              ]}
              activeOpacity={0.7}
              onPress={() => {
                onPress(item); // Call onPress without state management here
              }}
            >
              <Text style={styles.title_text}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SearchFilterButton;
