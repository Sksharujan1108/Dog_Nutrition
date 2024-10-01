import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useMemo } from "react";
import { SearchStackScreenProps } from "@/navigation/navigation_Models/app_Models/search/search_Models";
import { styles } from "./styles";
import Filter from "@/assets/svg/home/Filter.svg";
import HomeHeader from "@/component/homeHeader";
import SearchInput from "@/component/input/SearchInput";
import SearchFilterButton from "@/component/searchFilterButton";
import MainButton from "@/component/button/mainButton";
import Slider from '@react-native-community/slider';

const Search = ({ navigation }: SearchStackScreenProps<"SearchScreen">) => {
  const [search, setSearch] = useState("");

  // State to track selected items for each category
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedProductType, setSelectedProductType] = useState<number | null>(
    null
  );
  const [selectedAge, setSelectedAge] = useState<number | null>(null);

  // Price Range
  const [priceRange, setPriceRange] = useState([1000, 4000]);

  // Filtered categories based on search input
  const filteredCategories = useMemo(() => {
    return foodCategories.filter((category) =>
      category.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.main_container}>
        <HomeHeader
          name={profileData?.name}
          location={profileData?.location}
          onPress={() => {
            navigation.navigate("CartScreenStack", {
              name: "CartScreen",
            });
          }}
        />
        <ScrollView
          contentContainerStyle={styles.scroll_view_container}
          showsVerticalScrollIndicator={false}
        >
          {/* Search Filter */}
          <View style={styles.search_filter_container}>
            {/* Search */}
            <SearchInput
              style={styles.search_container}
              placeholder={"Search..."}
              value={search}
              onChangeText={(text: any) => setSearch(text)}
              onPressClose={() => setSearch("")}
            />

            {/* Filter */}
            <TouchableOpacity
              style={styles.filterBtn}
              activeOpacity={0.5}
              onPress={() => console.log("Filter")}
            >
              <Filter />
            </TouchableOpacity>
          </View>

          {/* Filter */}
          <View style={styles.filter_container}>
            <Text style={styles.filter_text}>Filter</Text>

            {/* Select Categories */}
            <View style={styles.select_categories_container}>
              <Text style={styles.select_categories_text}>
                {"Select Categories"}
              </Text>
              <SearchFilterButton
                data={filteredCategories} // Use filtered data here
                numColumns={4}
                selectedId={selectedCategory} // Pass selected ID here
                onPress={(item) => setSelectedCategory(item.id)} // Update selected category
              />
            </View>

            {/* Select Product Type */}
            <View style={styles.select_categories_container}>
              <Text style={styles.select_categories_text}>
                {"Select Product Type"}
              </Text>
              <SearchFilterButton
                data={productType}
                selectedId={selectedProductType} // Pass selected ID here
                onPress={(item) => setSelectedProductType(item.id)} // Update selected product type
                numColumns={3}
              />
            </View>

            {/* Select Age */}
            <View style={styles.select_categories_container}>
              <Text style={styles.select_categories_text}>{"Age"}</Text>
              <SearchFilterButton
                data={ageData}
                numColumns={4}
                selectedId={selectedAge} // Pass selected ID here
                onPress={(item) => setSelectedAge(item.id)} // Update selected age
              />
            </View>

            {/* Price Range Slider */}
            <View style={styles.slider_container}>
              <Text style={styles.select_categories_text}>Price Range</Text>
              <View style={styles.slider_labels}>
                <Text style={styles.price_label}>Rs {priceRange[0]}</Text>
                <Text style={styles.price_label}>Rs {priceRange[1]}</Text>
              </View>
              <Slider
                style={styles.slider}
                minimumValue={100}
                maximumValue={5000}
                step={100}
                minimumTrackTintColor="#1EB1FC"
                maximumTrackTintColor="#d3d3d3"
                value={priceRange[0]}
                onSlidingComplete={(value) =>
                  setPriceRange([value, priceRange[1]])
                }
              />
              <Slider
                style={styles.slider}
                minimumValue={1000}
                maximumValue={8000}
                step={100}
                minimumTrackTintColor="#1EB1FC"
                maximumTrackTintColor="#d3d3d3"
                value={priceRange[1]}
                onSlidingComplete={(value) =>
                  setPriceRange([priceRange[0], value])
                }
              />
            </View>

            {/* Button */}
            <MainButton
              style={styles.save_apply_style}
              title={"Apply"}
              onPress={() => console.log('Apply')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;

const profileData = {
  name: "Sandy",
  location: "Mumbai, India",
};

const foodCategories = [
  { id: 1, title: "Rice" },
  { id: 2, title: "Noodles" },
  { id: 3, title: "Curry" },
  { id: 4, title: "Biryani" },
  { id: 5, title: "Dessert" },
];

const productType = [
  { id: 1, title: "Drools" },
  { id: 2, title: "BlackHawk" },
  { id: 3, title: "Royal Canin" },
  { id: 4, title: "Eukanuba" },
  { id: 5, title: "Chappe" },
];

const ageData = [
  { id: 1, title: "1-4" },
  { id: 2, title: "5-8" },
  { id: 3, title: "9-12" },
  { id: 4, title: "13-16" },
  { id: 5, title: "17-20" },
  { id: 6, title: "20+" },
];
