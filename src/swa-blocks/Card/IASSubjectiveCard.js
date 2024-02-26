import React from "react"
import SwaCard from "../../swa-components/Card/swaCard";
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import SwaButton from "../../swa-components/Button/swaButton";

function IASSubjectiveCard(){
    return(
        <View>
           <SwaCard 
           backgroundColor="#B9DCFF"
           width={328}
           height={284}
           borderRadius={10}
           >
            <View style={styles.exam}>
            <SwaCard 
             backgroundColor="#193DAD"
             borderRadius={10}
             width={263}
             height={60}
             >
                <View style={styles.examnot}>
                <Text style={styles.examtext}>Exam Starts on 23/12/23 12:00PM</Text>  
                <Text style={styles.examtext}>Complete exam by 25/12/23 11:59PM</Text>  
                </View>
             
                </SwaCard>
            </View>
            
            <Text style={styles.text}>IAS Subjective Test</Text>
            <View style={styles.dir}>
                <View>
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
            size="xsmall"
            mode="outlined"
            backgroundColor="#B9DCFF"
            label="Syllabus"
            />
             <SwaButton
            size="xsmall"
            mode="outlined"
            backgroundColor="#B9DCFF"
            label="Paper"
            />
            </View>
            <View style={styles.upload}>
            <SwaButton
            size="xmedium"
            mode="outlined"
            backgroundColor="#008FFF"
            label="Upload"
            labelColor="white"
            labelFontSize={16}
            />
            </View>
          
            </SwaCard>     
        </View>
    )
    
}
const styles = StyleSheet.create({
    exam: {
        position:"absolute",
        top:-10,
        left:19

    },
    examnot:{
        position:"absolute",
        top:-5,
        left:10
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
    top:10
},
time:{
    fontSize:16,
    fontWeight:650
},
btn:{
    flexDirection:"row",
    top:30,
    justifyContent:"space-between"
},
upload:{
    top:40,
    left:0
}
})
export default IASSubjectiveCard;