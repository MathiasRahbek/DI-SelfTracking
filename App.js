import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Profile from "./screens/Profile";
import Market from "./screens/Market";
import Stats from "./screens/Stats";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRout="Profile">
        <Stack.Screen
          name="Profile" // Name for the page, used to reference it when navigating.
          component={Profile} // Which Component should be rendered when the page is shown?
          options={{
            title: "Data eState",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Market"
          component={Market}
          options={{
            title: "Market",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Stats"
          component={Stats}
          options={{
            title: "Stats",
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
