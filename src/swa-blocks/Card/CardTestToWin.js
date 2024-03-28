import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";

function CardTestToWin() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Take a test and win up to 50% scholarship</Text>
          <View style={styles.questions}>
            <View style={styles.question}>
              <MaterialCommunityIcons name="checkbox-outline" size={14} color="#5E5E5E" />
              <Text style={styles.questionText}>15 Questions</Text>
            </View>
            <View style={styles.question}>
              <MaterialCommunityIcons name="checkbox-outline" size={14} color="#5E5E5E" />
              <Text style={styles.questionText}>15 Questions</Text>
            </View>
          </View>
          {/* <Image source={require("../../assets/your_image.png")} style={styles.image} /> */}
        </View>
        <View style={styles.buttonContainer}>
          <SwaButton
            theme={themeObject}
            size="medium"
            borderRadius={10}
            labelFontSize={12}
          >
            Attempt Now
          </SwaButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#B9DCFF",
    borderRadius: 10,
    padding: 10,
  },
  contentContainer: {
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#193DAD",
    width: "70%",
    lineHeight: 18,
  },
  questions: {
    marginTop: 10,
  },
  question: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionText: {
    marginLeft: 3,
    fontSize: 12,
    color: "#5E5E5E",
  },
//   image: {
//     marginTop: 10,
//     width: 100, // Adjust width as needed
//     height: 100, // Adjust height as needed
//   },
  buttonContainer: {
    marginTop: 20,
    marginLeft: 16,
  },
});

export default CardTestToWin;
