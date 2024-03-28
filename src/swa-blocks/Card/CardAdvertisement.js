import React from "react";
import { View,StyleSheet } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import SwaCheckbox from "../../swa-components/Checkbox/SwaCheckBox";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";
function CardAdvertisement(){
return(
    <View style={styles.cardstyle}>
    <SwaCard
    width={328}
    height={180}
    borderRadius={10}
    backgroundColor="#B9DCFF"
    >
        <View>
            <Text style={styles.textcard}>Take a test and win upto 50%scholarship</Text>
            <View style={styles.quescard}>
                <View style={styles.checkcard}>
                   <SwaCheckbox
                   style={styles.check}
                   status="checked"
                   color="#5E5E5E"
                   />
                   <Text style={styles.ques}>15 Questions</Text>
                </View>
                <View style={styles.checkcard}>
                   <SwaCheckbox
                   style={styles.check}
                   status="checked"
                   color="#5E5E5E"
                   />
                   <Text style={styles.ques}>15 Minutes</Text>
                </View>
            </View>
        </View>
        <View style={styles.btn}>
            <SwaButton
            mode="contained"
            theme={themeObject}
            size="xxmedium"
            borderRadius={10}
            >Attempt Now</SwaButton>
        </View>
    </SwaCard>
</View>
)
}
const styles = StyleSheet.create({
    textcard:{
        fontSize:14,
        width:190,
        fontWeight:700,
        color:"#193DAD",
        bottom:60,
        left:10
    },
   ques:{
    fontSize:12,
    fontWeight:600,
    top:8
   },
   checkcard:{
    flexDirection:'row',
   },
   cardstyle:{
    left:30,
    top:30
   },
   quescard:{
    bottom:65
   },
   btn:{
    bottom:60,
    left:5
   }
})
export default CardAdvertisement;