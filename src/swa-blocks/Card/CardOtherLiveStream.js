import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { Text } from "react-native-paper";

function CardOtherLiveStream() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.videoContainer}>
          <FontAwesome6 style={styles.icon} name="play-circle" size={24} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title} variant="labelSmall">Solving CBSE Boards 10 Years Question Bank</Text>
          <Text style={styles.description}>
            by Manish S Pandey, Giridhar J, Siva Prakash K
          </Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.revision}>Revision(JEE Mains Starter Course)</Text>
            <View style={styles.button}>
                <Text style={styles.join}>Join Now</Text>
            </View>
          </View>
        </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 354,
    height: 90,
    backgroundColor: "white",
    flexDirection: 'row',
  },
  videoContainer: {
    width: 78,
    height: 56,
    backgroundColor: "lightblue",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    color: "#175CCC",
    fontSize: 11,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
    fontWeight: '400',
    color: "#4B4B4B",
  },
  revision: {
    fontSize: 10,
    fontWeight: '500',
    width: 135,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width:69,
    height:20,
    borderWidth:1,
    borderRadius:10,
    borderColor:"#008FFF",
    marginTop:3
  },
  join: {
    position: 'absolute',
    fontSize: 11,
    fontWeight: 400,
    right: 8,
  },
});

export default CardOtherLiveStream;
