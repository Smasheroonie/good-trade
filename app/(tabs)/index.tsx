import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Featured from "../components/Featured";
import NearMe from "../components/NearMe";

export default function Index() {
  return (
    <View>
      <Header />
      <View style={styles.view}>
        <Featured />
        <NearMe />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "100%",
  },
});
