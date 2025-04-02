import { View, Text } from "react-native";
import Slider from "./Slider";

export default function Featured() {
  return (
    <View style={{ height: 300, width: "90%", marginVertical: "5%" }}>
      <Text>Featured</Text>
      <Slider />
    </View>
  );
}
