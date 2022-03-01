import React, { useState } from "react";
import { useContext, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";

import TextItem1 from "../components/TextItem1";
import TextItem2 from "../components/TextItem2";
import TextItem3 from "../components/TextItem3";
import TextItem4 from "../components/TextItem4";
import TextItem5 from "../components/TextItem5";

import { DataContext } from "./../App";

import reddot from "../assets/pictures/reddot.gif";

export default function Market({ navigation }) {
  const {
    DataList1,
    DataList2,
    DataList3,
    DataList4,
    DataList5,
    deleteFunction1,
    deleteFunction2,
    deleteFunction3,
    deleteFunction4,
    deleteFunction5,
  } = useContext(DataContext);
  return (
    <View style={styles.container}>
      <View style={styles.marketSection}>
        <Text style={styles.headLine}>
          <Image style={styles.reddot} source={reddot}></Image> Live Market
        </Text>

        <ScrollView>
          {DataList1.map((text1, index) => (
            <TextItem1
              key={index}
              text1={text1.text1}
              dataDemand1={text1.dataDemand1}
              price1={text1.price1}
              handleDeleteFunction1={deleteFunction1}
            />
          ))}
          {DataList2.map((text2, index) => (
            <TextItem2
              key={index}
              text2={text2.text2}
              dataDemand2={text2.dataDemand2}
              price2={text2.price2}
              handleDeleteFunction2={deleteFunction2}
            />
          ))}
          {DataList3.map((text3, index) => (
            <TextItem3
              key={index}
              text3={text3.text3}
              dataDemand3={text3.dataDemand3}
              price3={text3.price3}
              handleDeleteFunction3={deleteFunction3}
            />
          ))}
          {DataList4.map((text4, index) => (
            <TextItem4
              key={index}
              text4={text4.text4}
              dataDemand4={text4.dataDemand4}
              price4={text4.price4}
              handleDeleteFunction4={deleteFunction4}
            />
          ))}
          {DataList5.map((text5, index) => (
            <TextItem5
              key={index}
              text5={text5.text5}
              dataDemand5={text5.dataDemand5}
              price5={text5.price5}
              handleDeleteFunction5={deleteFunction5}
            />
          ))}

          {/* Premade Items */}
          {/* Kathryn Nelson */}
          <View style={[styles.tile, styles.dropShadow]}>
            <Text style={styles.fontBigBold}>Seller: Kathryn Nelson</Text>
            <View style={styles.spaceBetween}>
              <Text style={styles.fontNormal}>Data: Menstrual cycles</Text>
              <Text style={styles.price}>$0.12</Text>
            </View>
            <br></br>
            {/* Input answer */}
            <View style={styles.spaceBetween}>
              <View style={styles.inputAnswer}>
                <Text style={styles.fontNormal}>
                  Regular with 5-day bleeding
                </Text>
              </View>
              {/* Buy button */}
              <View style={styles.buyButton}>
                <Text style={styles.fontNormalWhite}>Buy</Text>
              </View>
            </View>
            <Text style={styles.smallText}>4 hours ago</Text>
          </View>
          {/* Dwayne Keller */}
          <View style={[styles.tile, styles.dropShadow]}>
            <Text style={styles.fontBigBold}>Seller: Dwayne Keller</Text>
            <View style={styles.spaceBetween}>
              <Text style={styles.fontNormal}>Data: Stock depositories</Text>
              <Text style={styles.price}>$0.28</Text>
            </View>
            <br></br>
            {/* Input answer */}
            <View style={styles.spaceBetween}>
              <View style={styles.inputAnswer}>
                <Text style={styles.fontNormal}>
                  $250,000 invested in Google
                </Text>
              </View>
              {/* Buy button */}
              <View style={styles.buyButton}>
                <Text style={styles.fontNormalWhite}>Buy</Text>
              </View>
            </View>
            <Text style={styles.smallText}>7 hours ago</Text>
          </View>
        </ScrollView>
      </View>

      {/* Categories section */}
      <View style={styles.categoriesSection}>
        <Text style={styles.headLine}>Categories</Text>
        <ScrollView>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Google searches</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Selection votes</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Insurance policy</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Personal income</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Consumer habits</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Stock depositories</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Profile schemes</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Webcam surveillance</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Microphone recordings</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Consumer behavior schemes</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.fontBigBold}>Shopping routines</Text>
          </View>
        </ScrollView>
      </View>

      {/* Activities section */}
      <View style={styles.activitiesSection}>
        <Text style={styles.headLine}>Activities</Text>
        <ScrollView>
          {/* New activity */}
          <View style={[styles.activitiesTile, styles.dropShadow]}>
            <Text style={styles.fontBigBold}>
              Novo Nordisk just bought 1,5 mio medical journals for $2000{" "}
            </Text>
            <Text style={styles.smallText}>Just now ...</Text>
          </View>
          {/* New activity */}
          <View style={[styles.activitiesTile, styles.dropShadow]}>
            <Text style={styles.fontBigBold}>
              Tesla just bought 4,000 Google searches about car preferences for
              $52.80
            </Text>
            <Text style={styles.smallText}>Just now ...</Text>
          </View>
          {/* New activity */}
          <View style={[styles.activitiesTile, styles.dropShadow]}>
            <Text style={styles.fontBigBold}>
              TV2 just bought 1.000 election vote data for $96
            </Text>
            <Text style={styles.smallText}>5 min. ago</Text>
          </View>
          {/* New activity */}
          <View style={[styles.activitiesTile, styles.dropShadow]}>
            <Text style={styles.fontBigBold}>
              Maersk just bought 1,5 mio consumer behaviour schemes for $2.600{" "}
            </Text>
            <Text style={styles.smallText}>1 hour ago</Text>
          </View>
          {/* New activity */}
          <View style={[styles.activitiesTile, styles.dropShadow]}>
            <Text style={styles.fontBigBold}>
              Elgiganten bought 140 profile schemes for $16.77
            </Text>
            <Text style={styles.smallText}>3 hours ago</Text>
          </View>
        </ScrollView>
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
  },

  reddot: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },

  dropShadow: {
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
  },

  //   Market section
  marketSection: {
    flex: 9,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    padding: 40,
  },

  headLine: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  // Categories section
  categoriesSection: {
    alignItems: "center",
    flex: 5,
    width: "100%",
    height: "100%",
    marginLeft: 20,
    backgroundColor: "#EFF5FD",
    flexDirection: "column",
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
  },

  categoryTile: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 30,
    padding: 25,
    borderRadius: 12,
    backgroundColor: "#B1CEEF",
    marginBottom: 17,
  },

  //Activities section
  activitiesSection: {
    alignItems: "center",
    flex: 6,
    width: "100%",
    height: "100%",
    backgroundColor: "#E0EEFF",
    flexDirection: "column",
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },

  activitiesTile: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "99%",
    padding: 25,
    borderRadius: 12,
    backgroundColor: "#F4F7FB",
    marginBottom: 25,
  },

  //Premade items
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
