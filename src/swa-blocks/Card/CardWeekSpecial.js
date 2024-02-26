import React from "react"
import SwaCard from "../../swa-components/Card/swaCard";
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";

function CardThisWeek(){
return(
    <View style={styles.card}>
          <SwaCard
    width={338}
    height={262}
    backgroundColor="#E8E8E8"
    borderRadius={10}
    >
        <View style={styles.text}>
        <Text style={styles.weektext}>This Week Special</Text>
        <Text style={styles.paratext}>Lorem ipsum dolor sit amet consectetur. Eu tincidunt scelerisque enim eu.</Text>
        </View>
          <View style={styles.imgset}>
            <View style={styles.img}>   
                  
            </View>
            <Text style={styles.imgtext}>Lorem ipsum dolor sit amet consectetur. Sagittis non.</Text>
          </View>
    </SwaCard>
    </View>
  
)
}
const styles = StyleSheet.create({
card:{
    marginLeft:15,
    top:15
},
weektext:{
    fontSize:30,
    fontWeight:600,
    left:8
},
paratext:{
    fontSize:14,
    color:"#727272"
},
text:{
    bottom:55,
    left:25
},
img:{
    width:164,
    height:100,
    backgroundColor:"white"
},
imgset:{
    flexDirection:'row',
},
imgtext:{
    color:"#727272",
    fontSize:16,
    lineHeight:24,
    fontWeight:500,
    width:155,
    left:10,
    top:20
}
})
export default CardThisWeek;