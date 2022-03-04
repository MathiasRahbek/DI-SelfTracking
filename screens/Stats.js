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
            <Text style={[styles.fontNormal, { color: "black" }]}>⎯</Text>
            <Text style={styles.fontNormal}>Average of all</Text>
          </View>
        </View>
      </View>
      <View style={styles.graphSection}>
        {/* <Image style={styles.graphImg} source={graph} /> */}
        <Text style={styles.header2}>Index price</Text>
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
                data: ["0.52", "0.5", "0.7", "0.65", "0.5", "0.67"],
                color: () => "red",
              },
              {
                data: ["0.61", "0.6", "0.4", "0.5", "0.6", "0.65"],
                color: () => "green",
              },
              {
                data: ["0.47", "0.5", "0.5", "0.6", "0.48", "0.52"],
                color: () => "purple",
              },
              {
                data: ["0.54", "0.7", "0.64", "0.75", "0.8", "0.75"],
                color: () => "pink",
              },
              {
                data: ["0.49", "0.55", "0.54", "0.4", "0.44", "0.38"],
                color: () => "lightblue",
              },
              {
                data: ["0.53", "0.57", "0.57", "0.57", "0.56", "0.59"],
                color: () => "black",
              },
            ],
          }}
          width={800} // from react-native
          height={550}
          yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "rgb(255,255,255,0)",
            backgroundGradientTo: "rgb(255,255,255,0)",
            decimalPlaces: 2, // optional, defaults to 2dp
            fillShadowGradient: "#EFF5FD",
            fillShadowGradientTo: "#EFF5FD",
            color: () => "black",
            labelColor: () => "black",
            style: {
              borderRadius: 1,
            },
            propsForDots: {
              r: "4",
            },
          }}
        />
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

  header2: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
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
