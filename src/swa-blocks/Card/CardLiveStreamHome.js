import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Fontisto } from '@expo/vector-icons';

function CardLiveStreamHome() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
      <View style={{height:140}}></View>
        <View style={styles.cardContent}>
          <Text variant="titleSmall">Solving JEE Mains 10 Years Question Bank</Text>
          <View style={styles.subtitle}>
            <Text variant="bodySmall" style={styles.subtitleText}>by Manish S Pandey, Giridhar J, Siva Prakash K</Text>
            <Text style={{marginTop:-12}} variant="titleSmall"><Fontisto name="clock" size={16} color="black" /> 20hr 30min</Text>
          </View>
        </View>
        <View style={styles.revisionContainer}>
          <Text variant="labelMedium" style={styles.revisionText}>Revision (JEE Mains Starter Course)</Text>
          <View style={styles.stream}>
            <Text style={{color:"#175CCC"}} variant="labelMedium">Live Stream started 25m ago</Text>
            <View style={styles.joinButton}>
              <Text>Join Now</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '90%',
    padding: 10,
    marginTop: 10,
    borderRadius: 10, 
  },
  cardContent: {
    padding: 10,
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitleText: {
    width: '60%', 
  },
  revisionContainer: {
    padding: 2,
    paddingLeft:8,
    paddingRight:8,
    backgroundColor:"#DDDDDD"
  },
  joinButton: {
    width: '30%',
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#008FFF",
  },
  stream: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CardLiveStreamHome;
