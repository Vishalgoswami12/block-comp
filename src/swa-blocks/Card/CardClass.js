import React from "react";
import SwaChip from "../../swa-components/Chip/swaChip";
import { Text } from "react-native-paper";
import { View, StyleSheet, Dimensions } from "react-native";
import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

function CardClass() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <FontAwesome6 style={styles.icon} name="circle-play" size={24} color="#329FFF" />
          <Text style={styles.text}>Quis autem vel eum iure reprehenderit qui in ea video heading</Text>
          <MaterialIcons style={styles.downloadIcon} name="file-download" size={24} color="#329FFF" />
        </View>
        <View style={styles.chipcard}>
          <SwaChip style={styles.chip} textStyle={styles.textchip}>MP Patwari C1 L2</SwaChip>
          <Text style={styles.time}>| 20:13 min</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
        <MaterialIcons style={styles.icon} name="event-note" size={24} color="#329FFF" />
          <Text style={styles.text}>Quis autem vel eum iure reprehenderit qui in ea video heading</Text>
          <MaterialIcons style={styles.downloadIcon} name="file-download" size={24} color="#329FFF" />
        </View>
        <View style={styles.chipcard}>
          <SwaChip style={styles.chip} textStyle={styles.textchip}>MP Patwari C1 L2</SwaChip>
          <Text style={styles.time}>| 20:13 min</Text>
        </View>
      </View>
      {/* Other cards here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "#E2F1FF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
  },
  text: {
    fontSize: 12,
    color: "#175CCC",
    width: width - 120, 
    marginLeft: 20,
  },
  icon: {
    marginTop: 20,
  },
  downloadIcon: {
    marginTop: 20,
    marginLeft: 60,
  },
  chipcard: {
    flexDirection: "row",
    marginLeft: 40,
  },
  chip: {
    width: 152,
    height: 30,
    backgroundColor: "#0D80F2",
    borderRadius: 10,
  },
  textchip: {
    color: "white",
    fontSize: 9,
  },
  time: {
    marginLeft: 9,
    marginTop: 3,
    color: "#727272",
    fontSize: 14,
  }
});

export default CardClass;
