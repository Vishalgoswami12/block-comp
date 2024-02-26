import React from "react"
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import SwaCard from "../../swa-components/Card/swaCard";
import { FontAwesome6 } from '@expo/vector-icons';
import SwaChip from "../../swa-components/Chip/swaChip";

function CardCourse(){
return(
    <View>
       
        <View style={styles.card}>

        <SwaCard
        width={200}
        height={184}
        title="JEE Foundation Course"
        // coverImage={}  // it will be used later
        titleStyle={styles.title}
        borderRadius={10}
        backgroundColor="#DDDDDD"
        >
            <View style={styles.textrow}>
                <Text style={styles.textstyle}>by Manish S Pandey</Text>
                <View style={styles.row}>
                <FontAwesome6 style={styles.icon} name="clock" size={8.4} color="black" />
                <Text style={styles.textstyle}>18hr 45mins</Text>
                </View>
            </View>
            <Text style={styles.sub}>Subjects</Text>
            <View style={styles.subchip}>
                <SwaChip style={styles.chip}
                textStyle={styles.textchip}
                >
                    Maths
                </SwaChip>
                <SwaChip style={styles.chip}
                textStyle={styles.textchip}
                >
                    Physics
                </SwaChip>
                <SwaChip style={styles.chip}
                textStyle={styles.textchip}
                >
                    Chemistry
                </SwaChip>
            </View>
        </SwaCard>
        </View>
      
    </View>
)
}
const styles = StyleSheet.create({

title:{
    fontSize:8.4,
    top:80,
    left:-17,
    fontWeight:500,
},
card:{
    marginTop:20,
    marginLeft:5
},
row:{
    flexDirection:"row",
    
},
textrow:{
    flexDirection:"row",
    justifyContent:"space-between",
    top:40
},
textstyle:{
    fontSize:8.4
},
icon:{
    right:8,
    top:2
},
sub:{
    fontSize:8,
    top:40,
    fontWeight:500
},
chip:{
    width:55,
    backgroundColor:"#175CCC",
    height:30,
    borderRadius:20
},
textchip:{
    fontSize:8,
    color:"white",
    bottom:2
},
subchip:{
    flexDirection:"row",
    justifyContent:"space-between",
    top:48,
    left:-5
}
})

export default CardCourse;