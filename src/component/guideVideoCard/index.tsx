import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./styles";
import Timer from '@/assets/image/guide/timer.svg'
import Play from '@/assets/image/guide/play.svg'

interface GuideVideoCardProps {
  data: {
    id: number;
    image: any;
    title: string;
    level: string;
    duration: string;
    url: string; // Add the video URL here
  }[];
  onPress: (url: string) => void; // Modify the onPress function to accept the URL
}

const GuideVideoCard = (props: GuideVideoCardProps) => {
  const { data, onPress } = props;
  return (
    <View>
      <FlatList
        numColumns={2}
        scrollEnabled={false}
        data={data}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content_container_style}
        renderItem={({ item, index }) => (
          <TouchableOpacity 
            style={styles.container}
            key={item.id}
            activeOpacity={0.5}
            onPress={() => onPress(item.url)} // Pass the specific URL to the onPress handler
          >
            {/* image container */}
            <View style={styles.image_container}>
              <Image style={styles.image} source={{ uri: item?.image}} />

              {/* video Button */}
              <View style = {styles.video_container}>
                <Play
                  style ={{marginLeft: 5}}
                />
              </View>
            </View>

            <View style={styles.text_container}>
              {/* Title */}
              <Text style={styles.title}>{item?.title}</Text>
              {/* Level */}
              <View style={styles.level_Container}>
                <Text style={styles.level_text}>{item?.level}</Text>
              </View>
              {/* duration */}
              <View style={styles.duration_Container}>
                <Timer/>
                <Text style={styles.duration_text}>
                  {item?.duration} <Text style={styles.time_text}> {'minutes'} </Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default GuideVideoCard;
