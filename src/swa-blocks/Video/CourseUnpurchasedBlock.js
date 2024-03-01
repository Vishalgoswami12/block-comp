import React from "react"
import { View,StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import SwaListAccordian from "../../swa-components/List/swaListAccordian";
import { MaterialIcons } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
function CourseUnpurchasedBlock(){
    return(
        <View>
          <View style={styles.video}></View>
          <Text style={styles.text} >Foundation Batch for MP Patwari</Text>
          <View style={styles.timercard}>
               <View style={styles.iconText}>
               <EvilIcons name="clock" size={11} color="black" />
               <Text style={styles.time}>8h 45m</Text>
               </View>
               <View style={styles.iconStudent}>
               <FontAwesome5 name="user" size={11} color="black" />
               <Text style={styles.time}>8.5k+ Students</Text>
               </View>
               <View style={styles.iconResource}>
               <Feather name="book-open" size={11} color="black" />
               <Text style={styles.resource}>100+ PDF Resources</Text>
               </View>
               </View>
               <View style={styles.course}>
                <Text style={styles.coursetext}>About the Course</Text>
                <Text style={styles.showtext}>Show more</Text>
               </View>
               <Text style={styles.showdetail}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis ullamaco jknxkjfgnj kfdgnkdfjng
               </Text>
               <View style={styles.example}></View>
               <Text style={styles.examptext}>
                Fig:1 : Example.png
               </Text>
               <View style={styles.notes}>
                <Text>For more notes refer</Text>
                <Text>Note 1:</Text>
                <Text>Note 1:</Text>
               </View>
               <Text style={styles.curricu}>Curricullum</Text>
               <View style={styles.subcard}>
                <Text style={styles.sub}>Subjects</Text>
               </View>
               {/* <ScrollView> */}
               <View style={styles.accor}>
                <SwaListAccordian
                title="English"
                />
                <Text style={styles.chap}>5 Chapters</Text>
               </View>
               <View style={styles.accor}>
                <SwaListAccordian
                title="English"
                />
                <Text style={styles.chap}>5 Chapters</Text>
               </View>
               <View style={styles.accor}>
                <SwaListAccordian
                title="English"
                />
                <Text style={styles.chap}>5 Chapters</Text>
               </View>
               <View style={styles.accor}>
                <SwaListAccordian
                title="English"
                />
                <Text style={styles.chap}>5 Chapters</Text>
               </View>
               <View style={styles.accor}>
                <SwaListAccordian
                title="English"
                />
                <Text style={styles.chap}>5 Chapters</Text>
               </View>
               <View style={styles.comment}>
                    <Text style={styles.commtext}>Comments</Text>
                    <Text style={styles.seetext}>See all</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles}>
                    <MaterialIcons name="circle" size={24} color="#DDDDDD" />
                    <Text style={styles.textf}>F</Text>
                    </View>
                    <Text style={styles.frank}>Franklin</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Text>
                    <Text style={styles.rply}>Reply (1)</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.container}>
                    <View style={styles}>
                    <MaterialIcons name="circle" size={24} color="#DDDDDD" />
                    <Text style={styles.textf}>F</Text>
                    </View>
                    <Text style={styles.frank}>Franklin</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Text>
                    <Text style={styles.rply}>Reply (1)</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.rupeeconta}>
                    <View style={styles.ruppee}>
                <MaterialIcons name="currency-rupee" size={24} color="black" />
                    <Text style={styles.rupeetext}>499</Text>
                    </View>
                    <View style={styles.btn}>
                    <SwaButton 
                    borderRadius={8}
                    labelColor="white"
                    >Enroll</SwaButton>
                    </View>
                 
                </View>
               {/* </ScrollView> */}
        </View>
    )
} 
const styles = StyleSheet.create({
    text:{
        top:60,
        left:10,
        fontWeight:700,
        fontSize:22
    },
    video:{
        width:400,
        height:200,
        backgroundColor:"black",
        top:20
    },
    iconText: {
        bottom: 37,
        left: 10
      },
      time: {
        left: 26,
        bottom: 17,
        fontWeight: 500,
        fontSize:11,
        bottom:12
      },
      iconStudent: {
        left: 110,
        bottom: 75,
        bottom:65
      },
      iconResource: {
        left: 255,
        bottom: 109,
        bottom:90
      },
      resource: {
        left: 20,
        bottom: 20,
        fontSize:11,
        bottom:13
      },
      timercard:{
        top:120
      },
      course:{
        flexDirection:'row',
        justifyContent:"space-between",
        top:30
      },
      coursetext:{
        fontSize:22,
        fontWeight:600,
        left:10
      },
      showtext:{
        fontSize:14,
        fontWeight:500,
        top:9,
        right:9,
        color:"#193DAD"
      },
      example:{
        width:328,
        height:162,
        backgroundColor:"grey",
        left:13,
        top:50
      },
      examptext:{
            top:50,
            left:100,
            fontSize:14,
      },
      notes:{
        top:60,
        left:10
      },
      showdetail:{
        fontSize:14,
        color:"#5E5E5E",
        width:328,
        left:13,
        top:40
      },
      curricu:{
        fontSize:22,
        top:70,
        left:13,
        fontWeight:600
      },
      sub:{
        top:11,
        left:10
    },
      subcard:{
        width:328,
        height:48,
        backgroundColor:"#DDDDDD",
        top:80,
        left:11,
        borderRadius:8,
      },
      chap:{
        fontSize:11,
        bottom:19,
        left:14
      },
      accor:{
        top:90
      },
      card1:{
            top:130,
            left:-8,
            
      },
      comment:{
        flexDirection:"row",
        justifyContent:"space-between",
        top:100
      },
      commtext:{
        fontSize:22,
        fontWeight:600,
        left:10,
      },
      seetext:{
        right:9,
        color:"#193DAD"
      },
      container:{
        top:120,
        left:6
      },
      textf:{
        bottom:22,
        left:7
      },
      frank:{
        fontSize:16,
        left:30,
        bottom:40
      },
      desc:{
        fontSize:11,
        width:300,
        left:29,
        bottom:40,
        color:"#4B4B4B"
      },
      rply:{
        fontSize:11,
        color:"#193DAD",
        left:30,
        bottom:32
      },
      line: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.8,
        marginVertical: 10,
        width:"90%",
        left:10,
        bottom:2
      },
      ruppee:{
        flexDirection:"row",
        left:10
      },
      rupeetext:{
        fontSize:24,
        bottom:4
      },
      rupeeconta:{
        flexDirection:"row",
        justifyContent:"space-between",
        top:130
      },
      btn:{
        right:10,
        bottom:5
      }
})
export default CourseUnpurchasedBlock;