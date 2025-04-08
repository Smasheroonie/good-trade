import { StyleSheet, Text, View } from "react-native";

export default function Articles() {
  return (
    <View style={{ height: 300, width: "90%", marginTop: "5%" }}>
      <Text>Articles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
  },
});
