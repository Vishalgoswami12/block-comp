import React, { useState } from "react"
import { View,StyleSheet,Image } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import {  Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";

function CardTestToWin(){
    const[checked,unchecked] = useState(false)
return(
    <View style={styles.container}>
        <SwaCard
        width={328}
        height={190}
        backgroundColor="#B9DCFF"
        borderRadius={10}
        >
            <View>
                <View style={styles.subcon}>
                <Text style={styles.text}>Take a test and win upto 50% scholarship</Text>
                <View style={styles.ques}>
                <MaterialCommunityIcons name="checkbox-outline" size={14} color="#5E5E5E" />
                <Text style={styles.questext}>15 Questions</Text>
                </View>
                <View style={styles.ques}>
                <MaterialCommunityIcons name="checkbox-outline" size={14} color="#5E5E5E" />
                <Text style={styles.questext}>15 Questions</Text>
                </View>
                <Image/>
                </View>
            </View>
            <View style={styles.btn}>
            <SwaButton
          label="Attemp Now"
          size="xxmedium"
          borderRadius={10}
          labelFontSize={12}
          />
            </View>
          
        </SwaCard>
    </View>
)
}
const styles = StyleSheet.create({
container:{
    marginTop:40,
    marginLeft:30
},
text:{
    fontSize:16,
    fontWeight:700,
    color:"#193DAD",
    width:210,
    lineHeight:18
},
icon:{
    position:'absolute',
    top:100
},
ques:{
    flexDirection:'row',
    top:10
},
questext:{
    bottom:3,
    left:3
},
subcon:{
    bottom:50,
    left:20
},
btn:{
    bottom:30,
    left:16
}
})
export default CardTestToWin;;