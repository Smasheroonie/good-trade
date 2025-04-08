import { ImageSliderType } from "@/data/sliderData";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
  item: ImageSliderType;
  index: number;
};

export default function SliderItem({ item, index }: Props) {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={item.image}
        style={{ width: 200, height: 200, borderRadius: 10 }}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.background}
      >
        <View style={{gap: 10}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 14,
    width: 200,
  },
  background: {
    position: "absolute",
    height: 200,
    width: 200,
    padding: 12,
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 1.2
  },
  description: {
    color: "#fff",
    fontSize: 12,
    letterSpacing: 1.2,
  },
});
