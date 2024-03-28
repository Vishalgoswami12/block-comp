import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import CardAdvertisement from "../../swa-blocks/Card/CardAdvertisement";
import IASMCQTest from "../../swa-blocks/Card/IASMCQTest";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";

function ExploreTestSeries() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <SwaAppBar
          style={styles.appBar}
          title="Tests"
          titleStyle={styles.title}
          backAction={true}
        />
      </View>
      <CardAdvertisement />
      <View style={styles.cardsContainer}>
        {[1, 2, 3, 4].map((item, index) => (
          <View key={index} style={styles.cardContainer}>
            <IASMCQTest />
          </View>
        ))}
      </View>
      <View>
        <BottomNavigationBar/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 900,
  },
  card: {
    backgroundColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 7,
    },
    shadowOpacity: 1,
    elevation: 11,
    bottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 60,
    left:22
  },
  cardContainer: {
    width: "43%",
    padding: 5,
  },
});

export default ExploreTestSeries;
