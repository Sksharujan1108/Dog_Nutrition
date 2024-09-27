import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { G } from "react-native-svg";
import { FlatList } from "react-native-gesture-handler";

interface GuideArticlesCardProps {
  data: {
    id: number;
    image: any;
    title: string;
  }[];
}

const GuideArticlesCard = (props: GuideArticlesCardProps) => {
  const { data } = props;
  return (
    <View>
      <FlatList
        scrollEnabled = {false}
        data={data}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.text_container}>
              {/* Title */}
              <Text style={styles.title}>{item?.title}</Text>
              {/* Button */}
              <TouchableOpacity
                style={styles.see_more_button}
                onPress={() => {}}
                activeOpacity={0.5}
              >
                <Text style={styles.button_text}>{"See More"}</Text>
              </TouchableOpacity>
            </View>

            {/* image container */}
            <View style={styles.image_container}>
              <Image style={styles.image} source={item?.image} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default GuideArticlesCard;
