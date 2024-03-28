import React from "react";
import SwaCard from "../../swa-components/Card/swaCard";
import SwaChip from "../../swa-components/Chip/swaChip";
import { View, StyleSheet } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { Text } from "react-native-paper";

function CardContentLiveStream() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardVideo}>
          <FontAwesome6 style={styles.icon} name="play-circle" size={24} color="black" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title} variant="labelSmall">Solving CBSE Boards 10 Years Question Bank</Text>
          <Text style={styles.desc}>by Manish S Pandey, Giridhar J, Siva Prakash K</Text>
          <View style={styles.chipContainer}>
            <Text style={styles.revision}>JEE Mains and Advanced Starter Course</Text>
            <SwaChip style={styles.chip}>
              <FontAwesome6 style={styles.bellIcon} name="bell" size={11} color="black" />
              <Text style={styles.time}>Starts in 25 min</Text>
            </SwaChip>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  cardContainer: {
    width: '90%',
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  cardVideo: {
    width: 78,
    height: 56,
    backgroundColor: "lightblue",
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginLeft: 8,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    color: "#175CCC",
  },
  desc: {
    fontSize: 10,
    fontWeight: 400,
    color: "#4B4B4B",
  },
  revision: {
    fontSize: 10,
    fontWeight: 500,
    width: '60%', // Adjust as needed
    color: "#4B4B4B",
  },
  chipContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  chip: {
    width: 98,
    height: 28,
    backgroundColor: "#B9DCFF",
    marginLeft: 12, // Adjust as needed
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bellIcon: {
    marginRight: 4,
  },
  time: {
    fontSize: 10,
    fontWeight: 400,
    color: "black",
  },
});

export default CardContentLiveStream;
