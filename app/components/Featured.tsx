import { ImageSlider } from "@/data/sliderData";
import { View, FlatList, Text } from "react-native";
import SliderItem from "./SliderItem";

export default function Featured() {
  return (
    <View style={{ height: 210, width: "90%", marginVertical: "5%" }}>
      <Text>Featured</Text>
      <View>
        <FlatList
          data={ImageSlider}
          renderItem={({ item, index }) => (
            <SliderItem item={item} index={index} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
      </View>
    </View>
  );
}
