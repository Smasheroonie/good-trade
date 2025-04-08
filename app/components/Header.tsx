import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Text>Good Trade</Text>
        <FontAwesome5 size={28} name="hand-holding-heart" />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.search} placeholder="Search businesses" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    paddingTop: 35,
    paddingBottom: 10,
    flexDirection: "column",
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 15,
    gap: "5px",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    backgroundColor: "#dedede",
    width: "92%",
    borderRadius: 20,
    padding: 8,
    paddingLeft: 14,
    color: "#616161",
  },
});
