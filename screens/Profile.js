import React, { useState, useContext } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";

import { DataContext } from "./../App";

export default function Profile({ navigation }) {
  const [text1, onChangeText1] = useState("");
  const [text2, onChangeText2] = useState("Last 48 hours of health tracking");
  const [text3, onChangeText3] = useState("");
  const [text4, onChangeText4] = useState(
    "One full day of recorded voice data"
  );
  const [text5, onChangeText5] = useState("");
  const {
    addFunction1,
    addFunction2,
    addFunction3,
    addFunction4,
    addFunction5,
  } = useContext(DataContext);

  const dataDemand1 = "The CPR-number of your child, Blake";
  const price1 = "$1.55";

  const dataDemand2 = "*Automatically detected from Apple Watch*";
  const price2 = "$0.49";

  const dataDemand3 = "Your vote for the election";
  const price3 = "$0.25";

  const dataDemand4 = "Recommended for you: Siri voice tracking";
  const price4 = "$0.99";

  const dataDemand5 = "Medicaments you have taken over the last 365 days";
  const price5 = "$0.89";

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileSection}>
          {/* Profile section */}
          <Image
            style={styles.profilePicture}
            source={require("../assets/pictures/profilepic.jpg")}
          ></Image>

          <Text style={styles.profileName}>Tim Johnson</Text>

          {/* Profile information */}
          <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.fontBold}>Data sold: </Text>
              <Text style={styles.fontNormal}>1,232</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.fontBold}>User status: </Text>
              <Text style={styles.fontNormal}>Premium</Text>
            </View>
            <Text style={styles.fontBold}>Achievements:</Text>
            <Text style={styles.fontNormal}>
              🔶 Top-seller{"\n"}🔷 Data expert{"\n"}🔴 Money runner{"\n"}🔵
              Baller
            </Text>
          </View>
          <Text style={styles.fontHeaderBold}>Balance:</Text>
          <Text style={styles.fontHeaderNormal}>$240.55</Text>
          <br></br>
          <TouchableOpacity
            style={styles.stdButton}
            onPress={() => navigation.navigate("Stats")}
          >
            <Text style={styles.fontBoldWhite}>Data value</Text>
          </TouchableOpacity>
        </View>

        {/* Data section */}
        <View style={styles.dataSection}>
          <Text style={styles.headLine}>Market</Text>
          <Text style={styles.underHeadline}>Data activity</Text>

          {/* Input 1 */}
          <Text style={styles.fontBold}>{dataDemand1} </Text>
          <TextInput
            style={styles.inputSection}
            placeholder={"Aa"}
            onChangeText={onChangeText1}
            value={text1}
          ></TextInput>

          {/* Input 2 */}
          <br></br>
          <br></br>
          <Text style={styles.fontBold}>{dataDemand2} </Text>
          <TextInput
            style={styles.inputSection}
            placeholder={"Aa"}
            onChangeText={onChangeText2}
            value={text2}
          ></TextInput>

          {/* Input 3 */}
          <br></br>
          <br></br>
          <Text style={styles.fontBold}>{dataDemand3} </Text>
          <TextInput
            style={styles.inputSection}
            placeholder={"Aa"}
            onChangeText={onChangeText3}
            value={text3}
          ></TextInput>

          {/* Input 4 */}
          <br></br>
          <br></br>
          <Text style={styles.fontBold}>{dataDemand4} </Text>
          <TextInput
            style={styles.inputSection}
            placeholder={"Aa"}
            onChangeText={onChangeText4}
            value={text4}
          ></TextInput>

          {/* Input 5 */}
          <br></br>
          <br></br>
          <Text style={styles.fontBold}>{dataDemand5} </Text>
          <TextInput
            style={styles.inputSection}
            placeholder={"Aa"}
            onChangeText={onChangeText5}
            value={text5}
          ></TextInput>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              style={styles.stdButton}
              onPress={() => navigation.navigate("Market")}
            >
              <Text style={styles.fontBoldWhite}>Go to market</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sell section */}
        <View style={styles.sellSection}>
          <br></br>
          <br></br>
          <br></br>
          <Text style={styles.underHeadline}>Price</Text>

          {/* Sell button 1 */}
          <Text style={styles.fontBold}>{price1}</Text>
          <TouchableOpacity
            style={styles.sellButton}
            onPress={() => {
              addFunction1({
                text1: text1,
                dataDemand1: dataDemand1,
                price1: price1,
              });
              onChangeText1("");
            }}
          >
            <Text style={styles.fontBoldWhite}>Sell</Text>
          </TouchableOpacity>

          {/* Sell button 2 */}
          <br></br>
          <br></br>
          <Text style={styles.fontBold}>{price2}</Text>
          <TouchableOpacity
            style={styles.sellButton}
            onPress={() => {
              addFunction2({
                text2: text2,
                dataDemand2: dataDemand2,
                price2: price2,
              });
              onChangeText2("");
            }}
          >
            <Text style={styles.fontBoldWhite}>Sell</Text>
          </TouchableOpacity>

          {/* Sell button 3 */}
          <br></br>
          <br></br>
          <Text style={styles.fontBold}>{price3}</Text>
          <TouchableOpacity
            style={styles.sellButton}
            onPress={() => {
              addFunction3({
                text3: text3,
                dataDemand3: dataDemand3,
                price3: price3,
              });
              onChangeText3("");
            }}
          >
            <Text style={styles.fontBoldWhite}>Sell</Text>
          </TouchableOpacity>

          {/* Sell button 4 */}
          <br></br>
          <br></br>
          <Text style={styles.fontBold}>{price4}</Text>
          <TouchableOpacity
            style={styles.sellButton}
            onPress={() => {
              addFunction4({
                text4: text4,
                dataDemand4: dataDemand4,
                price4: price4,
              });
              onChangeText4("");
            }}
          >
            <Text style={styles.fontBoldWhite}>Sell</Text>
          </TouchableOpacity>

          {/* Sell button 5 */}
          <br></br>
          <br></br>
          <Text style={styles.fontBold}>{price5}</Text>
          <TouchableOpacity
            style={styles.sellButton}
            onPress={() => {
              addFunction5({
                text5: text5,
                dataDemand5: dataDemand5,
                price5: price5,
              });
              onChangeText5("");
            }}
          >
            <Text style={styles.fontBoldWhite}>Sell</Text>
          </TouchableOpacity>
        </View>

        {/* Trending section */}
        <View style={styles.trendingSection}>
          <Text style={styles.headLine}>Trending</Text>
          <Text style={styles.fontTrending}>
            ▸ Election votes{"\n"}▸ Personal income{"\n"}▸ Insurance policy
            {"\n"}▸ Religious beliefs{"\n"}▸ Shopping routines{"\n"}▸ Education
            {"\n"}▸ Family life{"\n"}▸ Health insurance
          </Text>
        </View>

        {/* <form>
        <label>
          Religion: <br></br>
          <textarea type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form> 
      <Button onPress={() => navigation.navigate("Market")}></Button> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
  },

  //Profile section
  profileSection: {
    flex: 4,
    width: "100%",
    height: "100%",
    backgroundColor: "#E0EEFF",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  profilePicture: {
    marginTop: 30,
    marginBottom: 10,
    resizeMode: "contain",
    width: 160,
    height: 160,
    borderRadius: 80,
  },

  profileName: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 50,
  },

  fontHeaderBold: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 50,
  },

  fontHeaderNormal: {
    fontSize: 22,
  },

  fontBold: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },

  fontNormal: {
    fontSize: 15,
  },

  fontBoldWhite: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },

  stdButton: {
    marginTop: 20,
    width: 150,
    height: 50,
    backgroundColor: "#3B5B81",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },

  //Data section
  dataSection: {
    flex: 10,
    width: "100%",
    height: "100%",
    marginLeft: 20,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    paddingLeft: 40,
    paddingTop: 40,
    paddingBottom: 40,
  },

  headLine: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  underHeadline: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  inputSection: {
    padding: 5,
    width: "100%",
    height: 40,
    borderWidth: 0.5,
    borderRadius: 12,
    fontSize: 15,
    color: "black",
  },

  //Sell section
  sellSection: {
    flex: 2,
    width: "100%",
    height: "100%",
    marginLeft: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    paddingTop: 40,
    paddingBottom: 40,
  },

  sellButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#F5C48A",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },

  //Trending section
  trendingSection: {
    flex: 4,
    marginRight: 30,
    marginLeft: 30,
    width: "100%",
    height: "90%",
    backgroundColor: "#EFF5FD",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    borderRadius: 20,
  },

  fontTrending: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    lineHeight: 50,
  },
});
