import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Featured from "../components/Featured";

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
