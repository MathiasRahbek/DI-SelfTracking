import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import graph from "../assets/pictures/graph.jpg";

export default function Stats({ navigation }) {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={styles.container}>
      <View style={styles.typeSection}>
        <Text style={styles.header}>Data type</Text>
        {/* Health */}
        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontNormal, { color: "red" }]}>⎯</Text>
            <Text style={styles.fontNormal}>Health</Text>
          </View>
          {/* Politics */}
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontNormal, { color: "green" }]}>⎯</Text>
            <Text style={styles.fontNormal}>Politics</Text>
          </View>
          {/* Work */}
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontNormal, { color: "purple" }]}>⎯</Text>
            <Text style={styles.fontNormal}>Work</Text>
          </View>
          {/* Relationships */}
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontNormal, { color: "pink" }]}>⎯</Text>
            <Text style={styles.fontNormal}>Relationships</Text>
          </View>
          {/* Religion */}
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontNormal, { color: "lightblue" }]}>⎯</Text>
            <Text style={styles.fontNormal}>Religion</Text>
          </View>
          {/* Average of all */}
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontNormal, { color: "black" }]}>⋯</Text>
            <Text style={styles.fontNormal}>Average of all</Text>
          </View>
        </View>
      </View>
      <View style={styles.graphSection}>
        {/* <Image style={styles.graphImg} source={graph} /> */}
        <View>
          <LineChart
            data={{
              labels: [
                "25.02.22",
                "26.02.22",
                "27.02.22",
                "28.02.22",
                "01.03.22",
                "02.03.22",
              ],
              datasets: [
                {
                  data: ["200", "10", "250", "400", "100", "180"],
                },
                {
                  data: ["100", "150", "100", "250", "10", "300"],
                },
                {
                  data: ["300", "80", "40", "200", "50", "100"],
                },
                {
                  data: ["50", "100", "80", "210", "40", "50"],
                },
                {
                  data: ["75", "210", "150", "90", "270", "350"],
                },
              ],
            }}
            width={800} // from react-native
            height={520}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#FFFFF",
              backgroundGradientFrom: "#EFF5FD",
              backgroundGradientTo: "#EFF5FD",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgb(255,255,255), ${opacity})`,
              labelColor: (opacity = 1) => `rgb(255,255,255), ${opacity})`,
              style: {
                borderRadius: 1,
              },
              propsForDots: {
                r: "4",
                strokeWidth: "1",
                stroke: "lightblue",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </View>
    </View>
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
    padding: 30,
  },

  //Datetype section
  typeSection: {
    flex: 4,
    width: "100%",
    height: "100%",
    backgroundColor: "#EFF5FD",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 15,
    padding: 20,
  },

  header: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 50,
  },

  fontNormal: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
  },

  //Graph section
  graphSection: {
    flex: 10,
    width: "100%",
    height: "100%",
    backgroundColor: "#EFF5FD",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    borderRadius: 15,
    marginLeft: 30,
  },

  graphImg: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
