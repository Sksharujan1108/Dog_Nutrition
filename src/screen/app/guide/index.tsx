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
    image: 'https://dogsinc.org/wp-content/uploads/2021/07/air-force-sergeant-morgan-watt.jpg',
    title: "Find and Join in Special Events For Your Pets!",
  },
  {
    id: 2,
    image: 'https://www.lep.co.uk/webimg/QVNIMTI0NTAxMTYw.jpg?crop=3:2,smart&trim=&width=640&quality=65',
    title: "Find and Join in Special Events For Your Pets!",
  },
  {
    id: 3,
    image: 'https://www.telegraph.co.uk/content/dam/news/2022/11/05/TELEMMGLPICT000313989487_trans_NvBQzQNjv4BqIGBrXjEx6ttpR7vQUDUeiSFJMyEXittCJe6Ch-I2vnI.jpeg',
    title: "Find and Join in Special Events For Your Pets!",
  }
];

const videoData = [
  {
    id: 1,
    image: 'https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/blt56e5faefbb0813bc/6261d465e0b6e528f0f8d6ca/teach-dog-lie-down_img_article-head.jpg',
    title: "Lay Down",
    level: "Beginner",
    duration: "3",
    url: "https://youtu.be/vkHs_rKdloc?si=MBHfmFM_S4KO-YQr",
  },
  {
    id: 2,
    image: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2022/07/GettyImages-1012306228.jpg',
    title: "Play Fetch",
    level: "Intermediate",
    duration: "5",
    url: "https://youtu.be/ZtpLvumSTzI?si=E7u8LXKz3hjZNuBY",
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/81pUVt0XuUL.jpg',
    title: "Jump Rope",
    level: "Advanced",
    duration: "10",
    url: "https://youtu.be/7P1DgDED23o?si=JUVbnIVNN7NEFEjj",
  },
  {
    id: 4,
    image: 'https://ckcusa.com/media/144887/337442_med.jpg?preset=ckcBlogImage',
    title: "Play Dead",
    level: "Beginner",
    duration: "2",
    url: "https://youtu.be/ghL7Z-0kXgU?si=jA6_xGjz9TDob3l1",
  }
]
