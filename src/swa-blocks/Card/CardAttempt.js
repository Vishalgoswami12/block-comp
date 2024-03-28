import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
import { FontAwesome6 } from '@expo/vector-icons';
import themeObject from "../../Constants/Globaltyle";

function CardAttempt() {
  return (
    <View style={styles.maincard}>
      <View style={styles.cardContainer}>
        <View style={styles.testcard}>
          <MaterialCommunityIcons name="book-open-outline" size={42} color="grey" />
          <Text variant="titleSmall" style={styles.cardtest}>Lorem ipsum dolor sit amet consecteturgh lorem ipsum dolor sit amet consectetur</Text>
        </View>
        <View>
          <Text variant="bodySmall" style={styles.quesicon}>
            <FontAwesome6 name="file-circle-question" size={12} color="grey" /> 120 Questions
          </Text>
        </View>
        <View style={styles.btnposition}>
          <View style={styles.syllabusbtn}>
            <SwaButton
              size="xsmall"
              theme={themeObject}
              labelColor="black"
              borderRadius={10}
              mode="outlined"
              backgroundColor="#E2F1FF"
            >
              Re-attempt
            </SwaButton>
          </View>
          <View>
            <SwaButton
              theme={themeObject}
              size="xsmall"
              labelColor="white"
              borderRadius={10}
            >
              View Analytics
            </SwaButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincard: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "#E2F1FF",
    borderRadius: 10,
    padding: 20,
    height: 'auto',
  },
  testcard: {
    flexDirection: "row",
    marginBottom: 10,
  },
  cardtest: {
    flex: 1,
    marginLeft: 20,
  },
  btnposition: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  quesicon: {
    marginLeft: 60,
  },
});

export default CardAttempt;
