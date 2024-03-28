import React from "react"
import { View,StyleSheet } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
function CoverImageHeader(){
return(
    <View style={{ }}>
        <View style={{backgroundColor:"#008FFF", height:490}}>
        <Text style={{width:344, color:"#193DAD", position:"absolute", bottom:20, padding:5}} variant="headlineSmall">Your Success Awaits. 
<Text style={{color:"#008FFF"}}>Join Swa:Adhyayan</Text> and Begin Writing Your Story.</Text>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
logo:{
    width:48,
    height:48,
    backgroundColor:"#B9DCFF"
}
})
export default CoverImageHeader;
