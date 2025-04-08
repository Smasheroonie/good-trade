import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Featured from "../components/Featured";
import NearMe from "../components/NearMe";
import { StatusBar } from "expo-status-bar";
import Articles from "../components/Articles";

export default function Index() {
  return (
    <View>
      <StatusBar style="dark" />
      <Header />
      <View style={styles.view}>
        <Featured />
        <NearMe />
        <Articles />
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
