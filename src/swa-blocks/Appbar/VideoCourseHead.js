import React from "react";
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
function VideoCourseHead(){
return(
    <View style={styles.card}>
       <SwaAppBar
        backAction={true}
        style={styles.appbar}
        elevated={true}
      >
         <Text style={styles.headtext}>Video Courses</Text>
      </SwaAppBar>
      
    </View>
)
}
const styles = StyleSheet.create({
appbar:{
    width:400,
    right:80,
    backgroundColor:"white",
    height:60
},
headtext:{
    fontSize:20,
    position:"absolute",
    left:160
},
card:{
    backgroundColor: "black", 
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 7,
    },
    shadowOpacity: 1,
    // shadowRadius:7,
    elevation: 11,
    bottom:5
}
})
export default VideoCourseHead;