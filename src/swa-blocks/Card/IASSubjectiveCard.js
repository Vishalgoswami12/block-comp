import React from "react"
import SwaCard from "../../swa-components/Card/swaCard";
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle"
function IASSubjectiveCard(){
    // console.log(themeObject)
    return(
        <View style={{padding:10}}>
           <View style={{ backgroundColor:"#B9DCFF",borderRadius:10,paddingLeft:10,paddingRight:10,paddingBottom:10}}>
            <View style={styles.exam}>
             <View style={{ backgroundColor:"#193DAD", borderRadius:10, width:263, alignSelf:"center"}}>
                <View style={styles.examnot}>
                <Text style={styles.examtext}>Exam Starts on 23/12/23 12:00PM</Text>  
                <Text style={styles.examtext}>Complete exam by 25/12/23 11:59PM</Text>  
                </View>
             
                </View>
            </View>
            <View>
            <Text style={styles.text}>IAS Subjective Test</Text>
            <View style={styles.dir}>
                <View style={{padding:10}}>
                    <Text>Marks</Text>
                    <Text style={styles.time}>120</Text>
                </View>
                <View>
                    <Text>Duration</Text>
                    <Text  style={styles.time}>120 mins</Text>
                </View>
            </View>
            <View style={styles.btn}>
            <SwaButton
            size="small"
            mode="outlined"
            backgroundColor="#B9DCFF"
            borderRadius={10}
            label="Syllabus"
            >
                Syllabus
            </SwaButton>
             <SwaButton
            size="small"
            mode="outlined"
            backgroundColor="#B9DCFF"
            borderRadius={10}
            label="Paper"

            >
                Paper
            </SwaButton>
            </View>
            <View style={styles.upload}>
            <SwaButton
            size="medium"
            mode="contained"
            labelColor="white"
            labelFontSize={16}
            borderRadius={10}
            theme={themeObject}
            customWidth={354}
            >Upload</SwaButton>
            </View>
          
            </View>     
        </View>
        </View>
    )
    
}
const styles = StyleSheet.create({
    examnot:{
        padding:10
    },
    examtext:{
        color:"white",
        fontWeight:500
    },
text:{
    fontSize:24,
    fontWeight:600,
},
dir:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
},
time:{
    fontSize:16,
    fontWeight:650
},
btn:{
    flexDirection:"row",
    justifyContent:"space-between"
},
upload:{
    marginTop:20
}
})
export default IASSubjectiveCard;