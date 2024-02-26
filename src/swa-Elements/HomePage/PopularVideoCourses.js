import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import CardCourse from "../../swa-blocks/Card/CardCourse";

function PopularVideoCourses() {
  return (
    <View>
         <Text style={styles.text}>Popular Video Courses</Text>
         <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <View key={index} style={[styles.cardContainer, index === 1 && styles.secondCardMargin]}>
          <CardCourse style={styles.card} />
        </View>
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        marginTop:20,
        fontWeight:500,
        marginLeft:15
    },
  scrollView: {
    flexDirection: "row",
    padding: 10,
  },
  cardContainer: {
    marginRight: 10, 
  },
  secondCardMargin: {
    marginLeft: 10,
  },
  card:{
    marginLeft:20
  }
});

export default PopularVideoCourses;