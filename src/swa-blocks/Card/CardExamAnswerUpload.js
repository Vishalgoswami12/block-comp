import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import CardQuestionMin from "./CardQuestionMin";
import { FontAwesome6 } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";

function CardExamAnswerUpload() {
  return (
    <View style={styles.container}>
      <View style={styles.subcon}>
        <Text variant="titleLarge">Subjective exam Header</Text>
        <Text style={styles.detailText} variant="labelMedium">Subject Details</Text>
        <Text style={styles.detailText} variant="labelMedium">IAS Test Series</Text>
        <View style={styles.cardmin}>
          <CardQuestionMin/>
        </View>
        <Text variant="titleMedium" style={styles.titleMedium}>Basic Rules & Information</Text>
        <View style={{marginTop:30}}>
        <Text style={[styles.para, { textAlign: 'justify' }]}>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Text>
        <Text style={[styles.para, { textAlign: 'justify', marginTop: 15 }]}>2. ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Text>
        <Text style={[styles.para, { textAlign: 'justify', marginTop: 15 }]}>3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</Text>
        <Text style={[styles.para, { textAlign: 'justify', marginTop: 15 }]}>4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</Text>
        </View>
        <View style={styles.dashedBorder}>
          <Text variant="bodyMedium" style={styles.parabrowse}>Browse and choose the file you want to upload from your computer</Text>
          <FontAwesome6 style={styles.plus} name="circle-plus" size={37} color="#008FFF" />
        </View>
        <View style={styles.btn}>
          <SwaButton
            theme={themeObject}
            borderRadius={10}
            size={"medium"}
          >
            Upload Answer Sheet
          </SwaButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcon: {
    flex: 1,
    padding: "10%",
    paddingLeft: "8%",
    paddingTop: "10%",
  },
  titleLarge: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailText: {
    marginTop: 4,
    color: "#727272",
  },
  cardmin: {
    marginTop: 20,
  },
  titleMedium: {
    marginTop: "1%",
  },
  dashedBorder: {
    marginTop: "20%",
    width: "100%",
    height: 108,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "9%",
    paddingLeft: "10%"
  },
  plus: {
    marginTop: "10%",
  },
  btn: {
    marginTop: "30%"
  },
  parabrowse:{
    width:"70%",
    marginTop:20
  }
});

export default CardExamAnswerUpload;
