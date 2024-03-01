import React from "react"
import { View,StyleSheet, ScrollView } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
import CoursePurchasedBlock from "../../swa-blocks/Video/CoursePurchasedBlock";
import { Text } from "react-native-paper";
function CoursePurchased(){
return(
    <View style={styles.card}>
         <SwaAppBar
        backAction={true}
        style={styles.appbar}
        elevated={true}
      >
         <Text style={styles.headtext}>Foundation Batch for MP Tiwari</Text>
      </SwaAppBar>
      <CoursePurchasedBlock/>
           <View style={styles.card1}>
                <BottomNavigationBar/>
      </View>
           {/* </ScrollView> */}
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
        height:"1450",
        
    },
    card1:{
      top:70,
      left:-8
}
})
export default CoursePurchased;