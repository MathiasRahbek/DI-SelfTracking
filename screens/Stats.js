import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import BarChart from "../components/BarChart";
import { UserData } from "../Data";

export default function Stats({ navigation }) {
  const [userData, setUserData] = useState({
    lables: [UserData.map((data) => data.year)],
    datasets: [{
      label: 'users gained',
      data: UserData.map((data) => data.userGain),

    }]
  })

  return (
  <div style={{width: 700}}>
    <BarChart chartData={userData}/>
  </div>
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
