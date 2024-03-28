import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";

function CardTest() {
  return (
    <View style={styles.maincard}>
      <View style={styles.cardContainer}>
        <View style={styles.testContent}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="book-open-outline" size={42} color="grey" />
          </View>
          <Text variant="titleSmall" style={styles.cardText}>Lorem ipsum dolor sit amet consecteturgh lorem ipsum dolor sit amet consectetur</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text variant="bodySmall" style={styles.questionText}>
            <FontAwesome6 name="file-circle-question" size={12} color="grey" /> 120 Questions
          </Text>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <SwaButton
                size="xsmall"
                labelColor="black"
                theme={themeObject}
                borderRadius={10}
                mode="outlined"
                backgroundColor="#E2F1FF"
              >
                Syllabus
              </SwaButton>
            </View>
            <View style={styles.button}>
              <SwaButton
                size="xsmall"
                theme={themeObject}
                labelColor="white"
                borderRadius={10}
              >
                Attempt Test
              </SwaButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    // width: "94%",
    borderRadius: 10,
    backgroundColor: "#E2F1FF",
    padding: 20,
  },
  testContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 10,
  },
  cardText: {
    width:250
    
  },
  detailsContainer: {
    marginTop: 8,
  },
  questionText: {
    marginLeft: 60,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default CardTest;
