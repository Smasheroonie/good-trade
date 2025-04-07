import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function NearMe() {
  const mapImage: ImageSourcePropType = require("@/assets/images/map.jpg");

  return (
    <View style={{ height: 300, width: "90%", marginVertical: "5%" }}>
      <Text>Near Me</Text>
      <View style={styles.container}>
        {/* <MapView style={styles.map} provider={PROVIDER_GOOGLE} /> */}
        <Image source={mapImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
