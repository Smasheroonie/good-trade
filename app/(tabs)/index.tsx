import { StyleSheet, View } from "react-native";
import Featured from "../components/Featured";
import Header from "../components/Header";

export default function Index() {
  return (
    <View>
      <Header />
      <View style={styles.view}>
        <Featured />
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
