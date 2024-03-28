import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import CardQuestionMin from "../../swa-blocks/Card/CardQuestionMin";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
// import themeObject from "../../Constants/Globaltyle";

import ElementStyle from "../../Constants/ElementStyle";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";
const QuizBasicInfo = () => {
  const renderMarkers = (label) => {
    return(
      <View style={styles.ans}>
          <MaterialCommunityIcons name="checkbox-blank" size={24} color={label.color} />
          <Text variant="labelLarge" style={styles.anstext}>
            {label.text}
          </Text>
        </View>
    )
  }
  const [labels , setLabels] = useState([{text:"Answered", color:"green"},{text: "Not Answered",color:"red"},{text: "Mark for review", color:"#EAB703"},{text:"Answered and marked for review",color:"#193DAD"}])
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      </View>
      <Text style={styles.testtext}>Quiz #1</Text>
      <View style={styles.quizrule}>
      <Text style={styles.basictest} variant="titleMedium">
        Basic Rules & Information
      </Text>
       <MaterialIcons style={styles.righticon} name="arrow-right-alt" size={20} color="black" />
      <Text style={styles.desc} variant="titleSmall">
     
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore{" "}
      </Text>

      <MaterialIcons style={styles.righticon} name="arrow-right-alt" size={20} color="black" />
      <Text style={styles.descsec} variant="titleSmall">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore{" "}
      </Text>
      <MaterialIcons style={styles.righticon} name="arrow-right-alt" size={20} color="black" />
      <Text style={styles.desthir} variant="titleSmall">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore{" "}
      </Text>
      <View style={styles.box}>
        {labels.map(({text,color}) => renderMarkers({text, color}))}
      </View>
      <View style={styles.btn}>
        <SwaButton mode={"contained"} size="medium" theme={themeObject} borderRadius={10} labelFontSize={16} labelColor="white">
          Start Quiz
        </SwaButton>
      </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create(ElementStyle.MY_TEST.QUIZ_BASIC_INFO);
export default QuizBasicInfo;
