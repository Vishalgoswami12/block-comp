import React from "react";
import SwaCard from "../../swa-components/Card/swaCard";
import { View,StyleSheet } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
function CardQuestionMin(){
return(
    <View>
        <SwaCard
        width={370}
        height={48}
        backgroundColor="#E8E8E8"
        borderRadius={10}
        />
        <View style={styles.question}>
        <SimpleLineIcons name="question" size={24} color="black" />
        <Text style={styles.text}>120 Questions <Text style={styles.line}> |</Text></Text>
        </View>
        <View style={styles.questioncard}>
        <MaterialCommunityIcons name="clock-outline" size={24} color="black" />
        <Text style={styles.textQues}>120 Minutes</Text>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
text:{
    fontSize:18,
    fontWeight:500,
    left:35,
    bottom:43
},
question:{
    bottom:35,
    left:20
},
line:{
    fontSize:35,
    fontWeight:100,
    left:40,
    top:20
},
textQues:{
    left:32,
    fontSize:18,
    bottom:25
},
questioncard:{
    left:220,
    bottom:110
}
})

export default CardQuestionMin;