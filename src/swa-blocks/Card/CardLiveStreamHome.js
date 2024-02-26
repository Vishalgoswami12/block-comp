import React from "react"
import SwaCard from "../../swa-components/Card/swaCard";
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Fontisto } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";

function CardLiveStreamHome(){
return(
    <View>
        <SwaCard
        width={328}
        height={302}
        >
            <View style={styles.subcon}>
            <Text variant="titleMedium">Solving JEE Mains 10 Years Question Bank</Text>
            <View style={styles.con}>
                <Text style={styles.text}>by Manish S Pandey, Giridhar J, Siva Prakash K</Text>
                <Text variant="titleSmall"><Fontisto name="clock" size={16} color="black" /> 20hr 30min</Text>
            </View>
            </View>
            <View style={styles.solvingcard}>
            <SwaCard
           width={321}
           height={50}
           backgroundColor="#DDDDDD"
           >
            <Text style={styles.revisiontext}>Revision(JEE Mains Starter Course)</Text>
            <View style={styles.stream}>
            <Text >Live Stream started 25m ago</Text>
            <View style={styles.joincard}>
                <Text>Join Now</Text>
            </View>
            </View>
          
            </SwaCard>
            </View>
          
        </SwaCard>
    </View>
)
}

const styles = StyleSheet.create({
con:{
    flexDirection:"row",
    flexWrap:"wrap"
},
text:{
    width:200
},
subcon:{
    top:60
},
solvingcard:{
    top:80,
    right:7
},
revisiontext:{
    bottom:70,
    fontSize:14
},
joincard:{
    width:67,
    height:26,
    borderWidth:1,
    borderRadius:10,
    textAlign:"center",
    right:-50,
    bottom:10,
    borderColor:"#008FFF"
},
stream:{
    flexDirection:"row",
    justifyContent:"space-between",
    position:"absolute",
    top:20
}
})
export default CardLiveStreamHome;