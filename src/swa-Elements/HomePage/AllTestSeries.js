import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import IASMCQTest from "../../swa-blocks/Card/IASMCQTest";

function AllTestSeries() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 22,
        }}
      >
        <Text style={styles.text}>All Test Series</Text>
        <Text style={{ marginTop: 22, color: "#0D80F2" }}>See All</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={{flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
        {[1, 2,3,4].map((item, index) => (
          <View key={index} style={styles.cardContainer}>
            <IASMCQTest />
          </View>
        ))}
        </View>
       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "500",
    marginLeft: 15,
  },
  scrollView: {
    padding: 10,
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  cardContainer: {
    // flex: 1,
    // marginRight: 10,
  },
});

export default AllTestSeries;
