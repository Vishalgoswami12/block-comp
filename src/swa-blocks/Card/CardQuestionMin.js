import React from "react";
import { View, StyleSheet } from "react-native";
import { SimpleLineIcons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { Text } from "react-native-paper";

function CardQuestionMin() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <SimpleLineIcons name="question" size={11} color="black" />
          <Text variant="labelSmall">120 Questions</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome6 name="grip-lines" size={11} color="black" />
          <Text variant="labelSmall">240 Marks</Text>
        </View>
        <View style={styles.item}>
          <MaterialCommunityIcons name="clock-outline" size={11} color="black" />
          <Text variant="labelSmall">120 Minutes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default CardQuestionMin;
