import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import CardContentLiveStream from "../../swa-blocks/Card/CardContenetLiveStream";
import CardOtherLiveStream from "../../swa-blocks/Card/CardOtherLiveStream";

function LiveClasses() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.tab}>
        <Text variant="titleMedium">Live</Text>
        <Text variant="titleMedium">Upcoming</Text>
        <Text variant="titleMedium">Ended</Text>
      </View>
      <Text style={styles.livetext} variant="headlineSmall">
        Your Live
      </Text>
      <View style={{marginTop:30}}>
      {[1, 2, 3, 4, 5].map((item, index) => (
      
        <View
          key={index}
          style={[
            styles.cardContainer,
            index === 1,2,3,4 && styles.secondCardMargin,
          ]}
        >
          <CardContentLiveStream />
        </View>
   
      ))}
           </View>
      <Text style={styles.othertext} variant="headlineSmall">
        Other Live
      </Text>
      <View style={{padding:10,marginTop:30}}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <View
          key={index}
          style={[
            styles.cardContainerother,
            index === 1,2,3,4,5 && styles.secondCardMargin,
          ]}
        >
          <CardOtherLiveStream />
        </View>
      ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  tab: {
    width: 270,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 60,
    marginTop: 30,
  },
  livetext: {
    marginTop: 20,
    marginLeft: 20,
  },
  cardContainer: {
    marginTop: 10, 
  },
  othertext: {
    marginTop:40,
    marginLeft: 20,
  },
  cardContainerother: {
  marginBottom:-20,
  }
});
export default LiveClasses;
