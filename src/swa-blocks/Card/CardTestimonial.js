import React from "react"
import { View,StyleSheet } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";

function CardTestimonial(){
return(
    <View style={styles.card}>
        <View style={styles.subcard}>
        <SwaCard
        width={200}
        height={104.83}
        backgroundColor="#E8E8E8"
        borderRadius={10}
        >
            <View style={styles.textwidth}>
            <Text style={styles.name}>Kathryn Murphy</Text>
                    <Text style={styles.air}>Air 1(JEE)</Text>
            </View>
                  
                <Text style={styles.longpara}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</Text>
        </SwaCard>
        </View>
       
    </View>
)
}
const styles = StyleSheet.create({
card:{
    // top:10,
    // left:7
},

subcard:{
    left:5,
    top:20
},
name:{
    fontSize:8.65,
    fontWeight:500
},
air:{
    fontSize:7.69,
    color:"#6B7280",
    fontWeight:400
},
textwidth:{
    bottom:70,
    left:45
},
longpara:{
    fontSize:7.69,
    color:"#000000",
    fontWeight:400,
    bottom:60
}
})
export default CardTestimonial;