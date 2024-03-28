import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { FontAwesome6 } from '@expo/vector-icons';
import SwaChip from "../../swa-components/Chip/swaChip";

function CardCourse() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardInner}>
        <View style={{width:200,height:97, backgroundColor:""}}></View>
          <Text style={styles.title}>JEE Foundation Course</Text>
          <View style={styles.textRow}>
            <Text style={styles.text}>by Manish S Pandey</Text>
            <View style={styles.row}>
              <FontAwesome6 name="clock" size={8.4} color="black" />
              <Text style={styles.text}>18hr 45mins</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>Subjects</Text>
          <View style={styles.chipContainer}>
            <SwaChip style={styles.chip} textStyle={styles.textChip}>Maths</SwaChip>
            <SwaChip style={styles.chip} textStyle={styles.textChip}>Physics</SwaChip>
            <SwaChip style={styles.chip} textStyle={styles.textChip}>Chemistry</SwaChip>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 10,
  },
  cardInner: {
    width: '90%', // Adjust width as needed
    height: 210,
    borderRadius: 10,
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  title: {
    fontSize: 8.4,
    fontWeight: '500',
    marginTop: 10,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 8.4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 8,
    marginTop: 6,
    fontWeight: '500',
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:6,
    marginTop: 5,
  },
  chip: {
    width: 88,
    height: 30,
    backgroundColor: '#175CCC',
    borderRadius: 20,
  },
  textChip: {
    fontSize: 8,
    color: 'white',
    bottom: 2,
  },
});

export default CardCourse;
