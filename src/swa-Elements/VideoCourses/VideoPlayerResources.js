import React from "react"
import { View,StyleSheet } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
import VideoPlayerResourcesBlock from "../../swa-blocks/Video/VideoPlayerResourcesBlock";
function VideoPlayerResources(){
return(
    <View style={styles.card}>
         <SwaAppBar
        backAction={true}
        style={styles.appbar}
        elevated={true}
      >
         <Text style={styles.headtext}>Mathematics Lecture2</Text>
      </SwaAppBar>
                <VideoPlayerResourcesBlock/>
                <View style={styles.bottombar}>
                    <BottomNavigationBar/>
                </View>
    </View>
)
}
const styles = StyleSheet.create({
    appbar:{
        width:500,
        right:120,
        top:3,
        backgroundColor:"white",
        height:60
    },
    headtext:{
        fontSize:16,
        position:"absolute",
        left:160
    },
    card:{
        // backgroundColor: "blue", 
        height:1450,
        
    },
      bottombar:{
        top:240
      }
})
export default VideoPlayerResources;