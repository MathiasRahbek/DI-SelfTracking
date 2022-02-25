import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { createContext, useEffect, useState } from "react";

import Profile from "./screens/Profile";
import Market from "./screens/Market";
import Stats from "./screens/Stats";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const DataContext = createContext();

export default function App() {
  //Input 1
  const [TextCon1, setTextCon1] = useState([]);
  const addText1 = (newText1) => {
    setTextCon1((prevTexts1) => [newText1, ...prevTexts1]);
  };

  //Input 2
  const [TextCon2, setTextCon2] = useState([]);
  const addText2 = (newText2) => {
    setTextCon2((prevTexts2) => [newText2, ...prevTexts2]);
  };

  //Input 3
  const [TextCon3, setTextCon3] = useState([]);
  const addText3 = (newText3) => {
    setTextCon3((prevTexts3) => [newText3, ...prevTexts3]);
  };

  //Input 4
  const [TextCon4, setTextCon4] = useState([]);
  const addText4 = (newText4) => {
    setTextCon4((prevTexts4) => [newText4, ...prevTexts4]);
  };

  //Input 5
  const [TextCon5, setTextCon5] = useState([]);
  const addText5 = (newText5) => {
    setTextCon5((prevTexts5) => [newText5, ...prevTexts5]);
  };

  return (
    <DataContext.Provider
      value={{
        DataList1: TextCon1,
        addFunction1: addText1,
        DataList2: TextCon2,
        addFunction2: addText2,
        DataList3: TextCon3,
        addFunction3: addText3,
        DataList4: TextCon4,
        addFunction4: addText4,
        DataList5: TextCon5,
        addFunction5: addText5,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRout="Profile"
          screenOptions={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#3B5B81",
            },
          }}
        >
          <Stack.Screen
            name="Profile" // Name for the page, used to reference it when navigating.
            component={Profile} // Which Component should be rendered when the page is shown?
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <ProfilePicture {...props} />,
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Market"
            component={Market}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <MarketPicture {...props} />,
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Stats"
            component={Stats}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <StatsPicture {...props} />,
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
}

function ProfilePicture() {
  return (
    <Image
      style={{ width: 250, height: 33, marginBottom: 20, marginTop: 20 }}
      source={require("./assets/pictures/dataestate.jpg")}
      resizeMode="contain"
    />
  );
}

function MarketPicture() {
  return (
    <Image
      style={{ width: 250, height: 33, marginBottom: 20, marginTop: 20 }}
      source={require("./assets/pictures/market.jpg")}
      resizeMode="contain"
    />
  );
}

function StatsPicture() {
  return (
    <Image
      style={{ width: 250, height: 33, marginBottom: 20, marginTop: 20 }}
      source={require("./assets/pictures/datavalue.jpg")}
      resizeMode="contain"
    />
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
