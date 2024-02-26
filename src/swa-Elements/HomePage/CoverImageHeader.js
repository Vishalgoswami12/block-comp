import React from "react"
import { View,StyleSheet } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import SwaChip from "../../swa-components/Chip/swaChip";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Text } from "react-native-paper";
function CoverImageHeader(){
return(
    <View>
        <SwaCard
        width={400}
        height={490}
        >
            <View style={styles.subcon}>
            <SwaCard width={400}
           height={90}
           backgroundColor="#008FFF"
           title="Hey There!"
           titleStyle={styles.title}
           >
            <View style={styles.chipsize}>
            <SwaChip
                style={styles.chip}
                textStyle={styles.textchip}
                // icon="camera"
                >
                    Set Goal
                    <MaterialIcons style={styles.icon} name="arrow-forward-ios" size={14} color="#008FFF" />
                </SwaChip>
            </View>
            <FontAwesome6 style={styles.bell} name="bell" size={18} color="white" />
           </SwaCard>
            </View>
           <View style={styles.coverimage}>
           <SwaCard
           width={400}
           height={410}
           backgroundColor="black"
        //    coverImage={require("")}
           >
                <Text style={styles.covertext}>Your Success Awaits. <Text style={styles.subtext}>Join Swa:Adhyayan</Text><Text style={styles.mintext}> and Begin Writing Your Story.</Text></Text>
                </SwaCard>
           </View>
          
        </SwaCard>
    </View>
)
}
const styles = StyleSheet.create({
title:{
    color:"white",
    marginLeft:35.
},
subcon:{
    position:"absolute",
    left:-9.3,
    top:-10.5
},
chip:{
    width:101,
    backgroundColor:"white",
    // height:80
},
textchip:{
    color:"#008FFF"
},
chipsize:{
    position:"absolute",
    top:40,
    left:50
},
icon:{
    // left:60
},
bell:{
    position:"absolute",
    right:15,
    top:20
},
coverimage:{
    left:-10
},
covertext:{
color:"#175CCC",
fontSize:24,
fontWeight:600,
width:262,
top:220
},
subtext:{
    color:"#008FFF",
    fontSize:24,
    fontWeight:600,
},
mintext:{
    color:"#193DAD",
    fontSize:24,
    fontWeight:600,
}
})
export default CoverImageHeader;
