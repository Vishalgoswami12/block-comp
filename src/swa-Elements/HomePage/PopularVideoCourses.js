import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import CardCourse from "../../swa-blocks/Card/CardCourse";

function PopularVideoCourses() {
  return (
    <View style={{}}>
         <Text style={styles.text}>Popular Video Courses</Text>
         <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewpopular}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <View key={index} style={[styles.cardContainerpopular, index === 1 && styles.secondCardMarginpopular]}>
          <CardCourse style={styles.cardpopular} />
        </View>
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        fontWeight:500,
        marginLeft:15
    },
  scrollViewpopular: {
    flexDirection: "row",
    paddingLeft:8
  },
  cardContainerpopular: {
    marginRight: 10, 
  },
  secondCardMarginpopular: {
    marginLeft: 10,
  },
  cardpopular:{
    marginLeft:20
  }
});

export default PopularVideoCourses;