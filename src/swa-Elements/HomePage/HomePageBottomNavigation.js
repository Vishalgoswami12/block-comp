import React from "react"
import { View,StyleSheet } from "react-native";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";

function HomePageBottomNavigation(){
return(
    <View>
          <View style={styles.line}></View>
        <BottomNavigationBar/>
    </View>
)
}
const styles = StyleSheet.create({
    line: {
      borderBottomColor: 'grey', 
      borderBottomWidth: 1, 
      marginVertical: 10, 
      top:10,

    },
  });
export default HomePageBottomNavigation;