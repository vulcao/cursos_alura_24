import { StyleSheet,Image, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image
        source={require("./pomodoro.png")}
      />
      <View style={styles.actions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions : {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
  }
});
