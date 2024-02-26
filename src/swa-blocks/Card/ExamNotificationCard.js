import React from "react"
import { SimpleLineIcons } from '@expo/vector-icons';
import { View,StyleSheet } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';
function ExamNotificationCard(){
return(
    <View>
        <SwaCard
        width={338}
        height={92}
        backgroundColor="#D9EDFF"
        >
            <View style={styles.exam}>
            <SimpleLineIcons style={styles.icon} name="notebook" size={16} color="#008FFF" />
            </View>
            <View style={styles.textstyle}>
            <Text variant="titleMedium">New Exam launched</Text>
            <Text style={styles.lngtxt}>A new practice test for Police is now available. Attempt it now and put your knowledge to test!</Text>
            </View>
            <FontAwesome style={styles.circle} name="circle" size={12} color="#193DAD" />
        </SwaCard>
    </View>
)
}

const styles = StyleSheet.create({
exam:{
    width:44,
    height:44,
    backgroundColor:"#E8E8E8",
    bottom:50
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