import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { FontAwesome } from "@expo/vector-icons";
import BlockStyle from "../../Constants/BlockStyle";
function ScoreCard() {
  return (
    <View style={{marginTop:70}}>
    <View style={styles.scorecontainer}>
      <View style={styles.bar}>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={80}
          tintColor="#329FFF"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#8CC6FF"
        />
      </View>
      <View style={styles.score}>
        <Text>Score:</Text>
        <Text>180/200</Text>
      </View>
      </View>
      <View style={styles.time}>
        <Text>TIME TAKEN</Text>
        <Text style={styles.text}>101min 44 sec</Text>
      </View>
      <View style={styles.graph}>

      </View>
      <View style={styles.sub}>
        <Text style={styles.subCol}>Maths</Text>
        <Text style={styles.per}>85/100</Text>
      </View>
      <View style={styles.subPhy}>
        <Text style={styles.subCol}>Physics</Text>
        <Text style={styles.per}>85/100</Text>
      </View>
      <View style={styles.subChem}>
        <Text style={styles.subCol}>Physics</Text>
        <Text style={styles.per}>85/100</Text>
      </View>
      <View style={styles.answers}>
      <View style={styles.ans}>
        <Text style={styles.subCol}>
          <FontAwesome name="circle" size={10} color="#175CCC" /> Total Answered{" "}
        </Text>
        <Text style={styles.ques}>190 Questions</Text>
        <View style={styles.ansWid}>
          <Text style={styles.subCol}>
            <FontAwesome name="circle" size={10} color="#175CCC" /> Correct Answeres{" "}
          </Text>
          <Text style={styles.ques}>190 Questions</Text>
        </View>
      </View>
      <View style={styles.unans}>
        <Text style={styles.subCol}>
          <FontAwesome name="circle" size={10} color="#175CCC" /> Total Answered{" "}
        </Text>
        <Text style={styles.ques}>190 Questions</Text>
        <View style={styles.ansWid}>
          <Text style={styles.subCol}>
            <FontAwesome name="circle" size={10} color="#175CCC" /> Correct Answeres{" "}
          </Text>
          <Text style={styles.ques}>190 Questions</Text>
        </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(BlockStyle.CARD.SCORE);

export default ScoreCard;
