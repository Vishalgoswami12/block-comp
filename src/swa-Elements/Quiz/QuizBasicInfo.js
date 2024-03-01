import React from "react"
import { View,StyleSheet } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import CardQuestionMin from "../../swa-blocks/Card/CardQuestionMin";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
import SwaButton from "../../swa-components/Button/swaButton";
function QuizBasicInfo(){
return(
    <View style={styles.container}>
         <View style={styles.card}>
        <SwaAppBar
          backAction={true}
          backgroundColor="white"
          elevated={true}
          style={styles.appBar}
        />
      </View>
      <Text style={styles.testtext}>Quiz #1</Text>
      <Text style={styles.title} variant="titleLarge">Quiz Header</Text>
      <Text style={styles.subtext}>Subject Details</Text>
      <Text style={styles.subtext}>Foundation Batch for MP Patwari</Text>
      <View style={styles.questioncard}>
      <CardQuestionMin/>
     
      </View>
      <Text style={styles.basictest} variant="titleMedium">Basic Rules & Information</Text>
     <Text style={styles.desc} variant="titleSmall">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
     <Text style={styles.descsec} variant="titleSmall">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
     <Text style={styles.desthir} variant="titleSmall">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
     <View style={styles.box}>
        <View style={styles.ans}>
        <MaterialCommunityIcons name="checkbox-blank" size={24} color="green" />
        <Text variant="labelLarge" style={styles.anstext}>Answered</Text>
        </View>
        <View style={styles.ans}>
        <MaterialCommunityIcons name="checkbox-blank" size={24} color="red" />
        <Text variant="labelLarge" style={styles.anstext}>Not Answered</Text>
        </View>
        <View style={styles.ans}>
        <MaterialCommunityIcons name="checkbox-blank" size={24} color="#EAB703" />
        <Text variant="labelLarge" style={styles.anstext}>Mark for review</Text>
        </View>
        <View style={styles.ans}>
        <MaterialCommunityIcons name="checkbox-blank" size={24} color="#193DAD" />
        <Text variant="labelLarge" style={styles.anstext}>Answered and marked for review</Text>
        </View>
     </View>
     <View style={styles.btn}>
     <SwaButton size="medium"
     borderRadius={10}
     labelFontSize={16}
     labelColor="white"
     >Start Test</SwaButton>
     </View>
    
     <View style={styles.bar}>
        <BottomNavigationBar/>
     </View>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        height:800
    },
    card: {
        backgroundColor: "black",
        shadowColor: "black",
        shadowOffset: {
          width: 3,
          height: 7
        },
        shadowOpacity: 1,
        elevation: 11,
        bottom: 5
      },
      testtext: {
        bottom: 49,
        left: 50,
        fontSize: 16,
        fontWeight: 600
      },
      title:{
        left:18,
        fontWeight:700
      },
      subtext:{
        fontSize:12,
        color:"#727272",
        left:21,
        top:10
      },
      questioncard:{
        top:40,
        left:10
      },
      basictest:{
        fontWeight:700,
        left:16,
        bottom:60
      },
      desc:{
        width:328,
        lineHeight:20,
        left:16,
        bottom:40,
      },
      descsec:{
        width:328,
        lineHeight:20,
        left:16,
        bottom:40,
        top:-10
      },
      desthir:{
        width:328,
        lineHeight:20,
        left:16,
        bottom:40,
        top:15
      },
      ans:{
        flexDirection:"row"
          },
          anstext:{
            left:10
          },
          box:{
            top:40,
            left:16
          },
          bar:{
            top:55
          },
          btn:{
            top:50,
            left:16
          }
})
export default QuizBasicInfo;