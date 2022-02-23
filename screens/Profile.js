import { StyleSheet, Text, View, Button } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View>
      <Text style={styles.container}>This is a test</Text>
      <Button onPress={() => navigation.navigate("Market")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
