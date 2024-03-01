import React from "react"
import { View,StyleSheet } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CardClass from "../../swa-blocks/Card/CardClass";
import { MaterialIcons } from '@expo/vector-icons';
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
function VideoPlayerResourcesBlock(){
return(
    <View>
      <View style={styles.video}></View>
      <View style={styles.texticon}>
      <Text style={styles.text} >Quis autem vel eum iure reprehenderit qui in ea video heading</Text>
      <MaterialCommunityIcons style={styles.iconbook} name="bookmark-outline" size={24} color="#175CCC" />
      </View>
     
      <View style={styles.timercard}>
          <Text>Subject Details</Text>
          <Text>Foundation Batch for MP Patwari</Text>
           </View>
           <View style={styles.course}>
            <Text style={styles.coursetext}>Resources/ <Text style={styles.chaptexr}>Chapter</Text></Text>
           </View>
                <CardClass/>
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
    </View>
)
}
const styles = StyleSheet.create({
    text:{
        top:60,
        left:10,
        fontWeight:700,
        fontSize:22,
        width:276
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
        top:60,
        left:11
      },
      course:{
        flexDirection:'row',
        justifyContent:"space-between",
        top:90
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
      curricu:{
        fontSize:22,
        top:60,
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
            top:70,
            left:-8
      },
      texticon:{
        flexDirection:"row",
        justifyContent:"space-between"
      },
      iconbook:{
        top:80,
        right:40
      },
      chaptexr:{
        color:'#868686',
      },
      comment:{
        flexDirection:"row",
        justifyContent:"space-between",
        top:190
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
        top:220,
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
        bottom:20
      },
})
export default VideoPlayerResourcesBlock;