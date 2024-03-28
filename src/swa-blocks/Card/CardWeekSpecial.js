import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

function CardThisWeek() {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.text}>
          <Text style={styles.weektext}>This Week Special</Text>
          <Text style={styles.paratext}>Lorem ipsum dolor sit amet consectetur. Eu tincidunt scelerisque enim eu.</Text>
        </View>
        <View style={styles.imgset}>
          <View style={styles.img}></View>
          <Text style={styles.imgtext}>Lorem ipsum dolor sit amet consectetur. Sagittis non.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    backgroundColor: "#E8E8E8",
    padding: 10,
    // width: "90%",
    borderRadius: 10,
  },
  weektext: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  paratext: {
    fontSize: 14,
    color: "#727272",
    textAlign: "center",
    width: "79%",
  },
  text: {
    alignItems: "center",
    marginBottom: 20,
  },
  img: {
    width: 164,
    height: 100,
    backgroundColor: "black",
  },
  imgset: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgtext: {
    color: "#727272",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    width: 155,
    textAlign: "center",
  },
});

export default CardThisWeek;
