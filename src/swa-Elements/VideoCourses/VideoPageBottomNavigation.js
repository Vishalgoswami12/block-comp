import React from "react"
import { View,StyleSheet } from "react-native";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";

function VideoPageBottomNavigation(){
return(
    <View>
      <View style={styles.card}>
      <BottomNavigationBar/>
      </View>
      
    </View>
)
}
const styles = StyleSheet.create({
   card:{
    left:8,
   }
  });
export default VideoPageBottomNavigation;