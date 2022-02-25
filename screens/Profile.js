import { StyleSheet, Text, View, Button } from "react-native";

export default function Profile({ navigation }) {
<<<<<<< Updated upstream
  return (
    <View>
      <View style={styles.leftSideBar}>

      </View>
      <form>
        <label>
          Religion: <br></br>
          <textarea type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form> 
      <Button onPress={() => navigation.navigate("Market")}></Button>

    
    </View>
  );
=======
  return <View style={styles.container}></View>;
>>>>>>> Stashed changes
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  leftSideBar: {
    backgroundColor: 'black'
  }
});
