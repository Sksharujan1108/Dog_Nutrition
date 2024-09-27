import { Text, View, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import React, { useState } from "react";
import HomeBackTitleHeader from "@/component/backTitleHeader";
import { styles } from "./styles";
import { GuideStackScreenProps } from "@/navigation/navigation_Models/app_Models/guide/guide_Models";
import SearchInput from "@/component/input/SearchInput";
import { Constants } from "./constants";
import GuideMainCard from "@/component/guideMainCard";
import GuideArticlesCard from "@/component/guideArticleCard";
import GuideVideoCard from "@/component/guideVideoCard";

const Guide = ({ navigation }: GuideStackScreenProps<"GuideScreen">) => {
  const [search, setSearch] = useState("");

  // Articles Filtered data based on search input
   const filteredArticles = data.filter(article => 
    article.title.toLowerCase().includes(search.toLowerCase())
  )

  // Video Filtered data based on search input
  const filteredVideos = videoData.filter(video => 
    video.title.toLowerCase().includes(search.toLowerCase())
  )

  // video Link Connect
  const handleVideoPress = (url: string) => {
    Linking.openURL(url);
  };
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <HomeBackTitleHeader
        title={"Guide"}
        onPressBack={() => {
          navigation.goBack();
        }}
        onPressCart={() => {
          navigation.navigate("CartScreenStack", {
            name: "CartScreen",
          });
        }}
      />
      <View style={styles.main_container}>
        <ScrollView
          contentContainerStyle={styles.scroll_view_container}
          showsVerticalScrollIndicator={false}
        >
          {/* Search Filter */}
          <View style={styles.search_filter_container}>
            {/* Search */}
            <SearchInput
              placeholder={Constants.SEARCH}
              value={search}
              onChangeText={(text: any) => {
                setSearch(text);
              }}
              onPressClose={() => {
                setSearch("");
              }}
            />
          </View>

          {/* Main Guide */}
          <GuideMainCard
            image={guideMainData.image}
            title={guideMainData.title}
            subTitle={guideMainData.subTitle}
          />

          {/* Guide Articles Card */}
          <Text style = {styles.article_text}> {'Articles'} </Text>
          <GuideArticlesCard 
            data={filteredArticles} 
          />

          {/* Videos */}
          <Text style = {styles.video_text}> {'Videos'} </Text>
          <GuideVideoCard
            data = {filteredVideos}
            onPress={handleVideoPress} // Pass the function to handle video presses
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Guide;

const guideMainData = {
  image: require("@/assets/image/guide/GuideImage.png"),
  title: "In Love With Pets?",
  subTitle: "Get all what you need for them",
};

const data = [
  {
    id: 1,
    image: require("@/assets/image/guide/DogGuide.webp"),
    title: "Find and Join in Special Events For Your Pets!",
  },
  {
    id: 2,
    image: require("@/assets/image/guide/DogGuide.webp"),
    title: "Find and Join in Special Events For Your Pets!",
  },
  {
    id: 3,
    image: require("@/assets/image/guide/DogGuide.webp"),
    title: "Find and Join in Special Events For Your Pets!",
  }
];

const videoData = [
  {
    id: 1,
    image: require("@/assets/image/guide/layDown.jpg"),
    title: "Lay Down",
    level: "Beginner",
    duration: "3",
    url: "https://youtu.be/vkHs_rKdloc?si=MBHfmFM_S4KO-YQr",
  },
  {
    id: 2,
    image: require("@/assets/image/guide/fetch1.webp"),
    title: "Play Fetch",
    level: "Intermediate",
    duration: "5",
    url: "https://youtu.be/ZtpLvumSTzI?si=E7u8LXKz3hjZNuBY",
  },
  {
    id: 3,
    image: require("@/assets/image/guide/jump.jpg"),
    title: "Jump Rope",
    level: "Advanced",
    duration: "10",
    url: "https://youtu.be/7P1DgDED23o?si=JUVbnIVNN7NEFEjj",
  },
  {
    id: 4,
    image: require("@/assets/image/guide/playDead.jpg"),
    title: "Play Dead",
    level: "Beginner",
    duration: "2",
    url: "https://youtu.be/ghL7Z-0kXgU?si=jA6_xGjz9TDob3l1",
  }
]
