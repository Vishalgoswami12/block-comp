import React from "react"
import { SimpleLineIcons } from '@expo/vector-icons';
import { View,StyleSheet } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
function ExamNotificationCard(){
return(
    <View>
         <SwaCard style={{height:96}}
       
       backgroundColor="#D9EDFF"
       >
           <View style={styles.exam}>
           <FontAwesome6 style={styles.icon} name="circle-question" size={20} color="#008FFF" />
           </View>
           <View style={styles.textstyle}>
           <Text variant="titleMedium">New Exam launched</Text>
           <Text style={styles.lngtxt}>A new practice test for Police is now available. Attempt it now and put your knowledge to test!</Text>
           </View>
           <FontAwesome style={styles.circle} name="circle" size={12} color="#193DAD" />
       </SwaCard>
       <View style={{marginTop:15}}>
       <SwaCard style={{height:96}}
       
       backgroundColor="white"
       >
           <View style={styles.exam}>
           <SimpleLineIcons style={styles.icon} name="notebook" size={16} color="#008FFF" />
           </View>
           <View style={styles.textstyle}>
           <Text variant="titleMedium">New Exam launched</Text>
           <Text style={styles.lngtxt}>A new practice test for Police is now available. Attempt it now and put your knowledge to test!</Text>
           </View>
       </SwaCard>
       </View>
      
    </View>
)
}

const styles = StyleSheet.create({
exam:{
    width:44,
    height:44,
    backgroundColor:"#E8E8E8",
    bottom:107,
    left:9
},
icon:{
    top:13,
    left:13
},
lngtxt:{
    fontSize:12,
    lineHeight:16,
    letterSpacing:1,
    width:250
},
textstyle:{
    position:"absolute",
    left:59
},
circle:{
    position:"absolute",
    right:0,
    top:31
}
})
export default ExamNotificationCard