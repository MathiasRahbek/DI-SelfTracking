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
  function deleteText1(id) {
    const updateTextCon1 = TextCon1.filter((text1) => text1.id !== id);

    setTextCon1(updateTextCon1);
  }

  //Input 2
  const [TextCon2, setTextCon2] = useState([]);
  const addText2 = (newText2) => {
    setTextCon2((prevTexts2) => [newText2, ...prevTexts2]);
  };
  function deleteText2(id) {
    const updateTextCon2 = TextCon2.filter((text2) => text2.id !== id);

    setTextCon2(updateTextCon2);
  }

  //Input 3
  const [TextCon3, setTextCon3] = useState([]);
  const addText3 = (newText3) => {
    setTextCon3((prevTexts3) => [newText3, ...prevTexts3]);
  };
  function deleteText3(id) {
    const updateTextCon3 = TextCon3.filter((text3) => text3.id !== id);

    setTextCon3(updateTextCon3);
  }

  //Input 4
  const [TextCon4, setTextCon4] = useState([]);
  const addText4 = (newText4) => {
    setTextCon4((prevTexts4) => [newText4, ...prevTexts4]);
  };
  function deleteText4(id) {
    const updateTextCon4 = TextCon4.filter((text4) => text4.id !== id);

    setTextCon4(updateTextCon4);
  }

  //Input 5
  const [TextCon5, setTextCon5] = useState([]);
  const addText5 = (newText5) => {
    setTextCon5((prevTexts5) => [newText5, ...prevTexts5]);
  };
  function deleteText5(id) {
    const updateTextCon5 = TextCon5.filter((text5) => text5.id !== id);

    setTextCon5(updateTextCon5);
  }
  // TextCon5.forEach((o, i) => (o.id = i + 1));

  return (
    <DataContext.Provider
      value={{
        DataList1: TextCon1,
        addFunction1: addText1,
        deleteFunction1: deleteText1,
        DataList2: TextCon2,
        addFunction2: addText2,
        deleteFunction2: deleteText2,
        DataList3: TextCon3,
        addFunction3: addText3,
        deleteFunction3: deleteText3,
        DataList4: TextCon4,
        addFunction4: addText4,
        deleteFunction4: deleteText4,
        DataList5: TextCon5,
        addFunction5: addText5,
        deleteFunction5: deleteText5,
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
