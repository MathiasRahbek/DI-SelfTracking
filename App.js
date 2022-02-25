import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import Profile from "./screens/Profile";
import Market from "./screens/Market";
import Stats from "./screens/Stats";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
