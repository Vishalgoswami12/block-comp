import React from "react";
import { View,StyleSheet,ScrollView } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import { MaterialIcons,FontAwesome6 } from '@expo/vector-icons';
import SwaProgressbar from "../../swa-components/Progressbar/SwaProgressbar";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle"
import Question from "../../swa-blocks/Question/Question";
function MCQScreen (){
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
            <SwaAppBar
                backgroundColor="white"
                elevated={true}
                style={styles.appBar}
                title="Quiz Header"
                titleStyle={styles.title}
            />
        </View>
        <View style={styles.txtbar}>
            <View style={styles.section}>
                <MaterialIcons style={styles.event} name="event-note" size={18} color="white" />
                <Text style={styles.per}>1/3</Text>
            </View>
            <SwaProgressbar
                style={styles.progress}
                progress={0.6}
            />
            <View style={styles.clocktext}>
                <FontAwesome6 style={styles.clock} name="clock" size={12} color="white" />
                <Text style={styles.time}>79:58</Text>
            </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.polity}>
            <View style={styles.arrow}>
                <Text>Indian Polity</Text>
                <FontAwesome6 style={styles.icon} name="sort-down" size={24} color="black" />
            </View>
            <View style={styles.btncon}>
                <SwaButton
                    mode="outlined"
                    borderRadius={10}
                    theme={themeObject}
                >Submit</SwaButton>
            </View>

        </View>
        <View style={styles.line2}></View>
        <View style={styles.ans}>
          <Text style={styles.textrev}>Review Answers</Text>
          <FontAwesome6 name="grip-lines" size={24} color="black" />
        </View>
        {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={index} style={[styles.cardContainer, index === 1,2,3,4 && styles.secondCardMargin]}>
                <Question />
            </View>
        ))}
    </ScrollView>
)
}
const styles = StyleSheet.create({
    container:{
        height:2200
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
      title:{
        fontSize:16,
        fontWeight:600
      },
      testtext: {
        bottom: 49,
        left: 50,
        fontSize: 16,
        fontWeight: 600
      },
      title:{
        fontSize:16,
        fontWeight:600
      },
      section:{
        width:64,
        height:28,
        backgroundColor:"#727272",
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        left:12
      },
      event:{
        top:4,
        left:7
      },
      per:{
        fontSize:14,
        color:"white",
        right:8,
        top:3
      },
      txtbar:{
        top:22,
        flexDirection:"row",
        justifyContent:"space-between",
        width:360
      },
      progress:{
        width:146,
        height:10,
        borderRadius:10,
        backgroundColor:"#175CCC",
        top:10
      },
      clocktext:{
        width:64,
        height:28,
        backgroundColor:"#008FFF",
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        left:12
      },
      clock:{
        top:6,
        left:8
      },
      time:{
        color:"white",
        fontSize:14,
        right:6,
        top:2
      },
      line: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginVertical: 10,
        width:350,
        top:40,
        left:20
      },
      arrow:{
        flexDirection:"row",
        top:8
      },
      btncon:{
        width:141,
        height:42,
        borderColor:"#008FFF",
        borderWidth:2,
        borderRadius:10
      },
      polity:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:360,
        left:14,
        top:50
      },
      icon:{
        left:17,
        bottom:7
      },
      ques:{
        top:140,
        left:15
      },
      scrollView: {
        padding: 10,
      },
      cardContainer: {
        marginRight: 10, 
        top:50,
        left:15
      },
      secondCardMargin: {
        // marginLeft: 10,
        marginTop:130
      },
      ans:{
        flexDirection:"row",
        top:270,
        position:"absolute",
        right:24
      },
      textrev:{
        color:"#193DAD",
        right:10
      },
      line2: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginVertical: 10,
        width:350,
        top:60,
        left:20
      },
})
export default MCQScreen;