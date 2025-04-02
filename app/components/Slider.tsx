import { ImageSlider } from "@/data/sliderData";
import { View, FlatList } from "react-native";
import SliderItem from "./SliderItem";

export default function Slider() {
  return (
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
  );
}
