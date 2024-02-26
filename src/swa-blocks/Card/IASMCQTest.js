import React from "react"
import SwaCard from "../../swa-components/Card/swaCard";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Foundation } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
function IASMCQTest(){
    return(
        <View style={styles.container}>
        <SwaCard
        width={160}
        height={240}
        backgroundColor="#E2F1FF" 
        title="IAS MCQ Test"
        titleStyle={styles.title}
        borderRadius={10}
        >
            <Text style={styles.ser}>Series</Text>
            <View style={styles.resize}>
            <Foundation name="clipboard-notes" size={15} color="grey" />
            <Text style={styles.text}>
            15+ Test
            </Text>
            </View>
            <View style={styles.line} />
            <View style={styles.iconText}>
            <Foundation name="clipboard-notes" size={15} color="grey" />
            <Text style={styles.ques}>1500+ Questions</Text>
            </View>
            <View style={styles.btn}>
            <SwaButton
            size="xsmall"
            borderRadius={10}
            label="Go To Tests"
            labelColor="white"
            labelFontSize={16}
            />
            </View>
           
        </SwaCard>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:163,
        height:244,
        borderWidth:1,
        borderColor:"#5AB0FF",
        marginLeft:5

    },
title:{
textAlign:"center",
lineHeight:20,
fontSize:14,
marginTop:70,
fontWeight:500
},
ser:{
    textAlign:"center",
    bottom:30,
    fontSize:14,
    fontWeight:500
},
text:{
    fontSize:12
},
resize:{
    flexDirection:'row',
    bottom:25,
    left:40
},
line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10, 
    bottom:28
  },
  ques:{
    fontSize:12,
    left:8
  },
  iconText:{
    flexDirection:"row",
    bottom:30,
    left:20
  },
  btn:{
    bottom:20
  }
})
export default IASMCQTest;