import React from "react"
import SwaCard from "../../swa-components/Card/swaCard";
import SwaProgressbar from "../../swa-components/Progressbar/SwaProgressbar";
import { View,StyleSheet } from "react-native";
import {  Text } from "react-native-paper";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FontAwesome } from '@expo/vector-icons';
function ScoreCard(){
return(
    <View>
    <SwaCard
    width={340}
    height={380}
    backgroundColor="#D9EDFF"
    />
   
    {/* <ProgressBar
    progress={0.5}
    /> */}
    <View style={styles.bar}>
    <AnimatedCircularProgress
  size={120}
  width={15}
  fill={80}
  tintColor="#329FFF"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#8CC6FF" />
    </View>
    <View style={styles.score}>
    <Text>Score:</Text>
    <Text>180/200</Text>
    </View>
   <View style={styles.time}>
    <Text>TIME TAKEN</Text>
    <Text style={styles.text}>101min 44 sec</Text>
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
   <View style={styles.ans}>
    <Text style={styles.subCol}><FontAwesome name="circle" size={10} color="#175CCC" /> Total Answered </Text>
    <Text style={styles.ques}>190 Questions</Text>
    <View style={styles.ansWid}>
    <Text style={styles.subCol}><FontAwesome name="circle" size={10} color="#175CCC" /> Correct Answeres </Text>
    <Text style={styles.ques}>190 Questions</Text>
    </View>
   </View>
   <View style={styles.unans}>
    <Text style={styles.subCol}><FontAwesome name="circle" size={10} color="#175CCC" /> Total Answered </Text>
    <Text style={styles.ques}>190 Questions</Text>
    <View style={styles.ansWid}>
    <Text style={styles.subCol}><FontAwesome name="circle" size={10} color="#175CCC" /> Correct Answeres </Text>
    <Text style={styles.ques}>190 Questions</Text>
    </View>
   </View>
    </View>
)
}

const styles = StyleSheet.create({
bar:{
    position: 'absolute', 
    top: 10, 
    left: 27,
},
score:{
    position:"absolute",
    left:60,
    top:45
},
text:{
    color:"#193DAD"
},
time:{
    position:"absolute",
    right:45,
    top:42
},
sub:{
    width:100,
    height:60,
    borderWidth:1 ,
    borderWidth:1,
    borderColor:"#BBBBBB",
    borderRadius:10,
    position:"absolute",
    top:160,
    left:10
},
subCol:{
    fontSize:14,
    left:10,
    top:8,
    color:"#175CCC"
},
per:{
    left:10,
    top:11
},
subPhy:{
    width:100,
    height:60,
    borderWidth:1 ,
    borderWidth:1,
    borderColor:"#BBBBBB",
    borderRadius:10,
    position:"absolute",
    top:160,
    left:120
},
subChem:{
    width:100,
    height:60,
    borderWidth:1 ,
    borderWidth:1,
    borderColor:"#BBBBBB",
    borderRadius:10,
    position:"absolute",
    left:230,
    top:160
},
ques:{
    top:10,
left:22
},
ansWid:{
    top:40
},
unans:{
    position:"absolute",
    bottom:140,
    left:200
},
ans:{
    bottom:140
}
});

export default ScoreCard;