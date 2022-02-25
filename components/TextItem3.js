import React from "react";
import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function TextItem3(props) {
  return (
    <View style={[styles.tile, styles.dropShadow]}>
      <Text style={styles.fontBigBold}>Seller: Tim Johnson</Text>
      <View style={styles.spaceBetween}>
        <Text style={styles.fontNormal}>Data: {props.dataDemand3}</Text>
        <Text style={styles.price}>{props.price3}</Text>
      </View>
      <br></br>
      {/* Input answer */}
      <View style={styles.spaceBetween}>
        <View style={styles.inputAnswer}>
          <Text style={styles.fontNormal}>{props.text3}</Text>
        </View>
        {/* Buy button */}
        <View style={styles.buyButton}>
          <Text style={styles.fontNormalWhite}>Buy</Text>
        </View>
      </View>
      <Text style={styles.smallText}>Just now ...</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  tile: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "99%",
    backgroundColor: "#F4F7FB",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },

  dropShadow: {
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
  },

  spaceBetween: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },

  fontBigBold: {
    lineHeight: 25,
    fontSize: 18,
    fontWeight: "bold",
  },

  fontNormal: {
    fontSize: 15,
  },

  price: {
    fontSize: 15,
    marginRight: 30,
    fontWeight: "bold",
  },

  fontNormalWhite: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },

  inputAnswer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "79%",
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    height: 40,
    paddingLeft: 10,
  },

  buyButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "19%",
    height: 40,
    backgroundColor: "#3B5B81",
    borderRadius: 12,
  },

  smallText: {
    marginTop: 8,
    fontSize: 12,
    fontStyle: "italic",
  },
});
