import React from "react"
import { View,StyleSheet, ScrollView } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
import CourseUnpurchasedBlock from "../../swa-blocks/Video/CourseUnpurchasedBlock";
function CourseUnpurchased(){
    return(
        <View style={styles.card}>
             <SwaAppBar
            backAction={true}
            style={styles.appbar}
            elevated={true}
          >
             <Text style={styles.headtext}>Foundation Batch for MP Tiwari</Text>
          </SwaAppBar>
                <CourseUnpurchasedBlock/>
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
        height:1750,
        
    },
      card1:{
            top:130,
            left:-8,
            
      },
    
})
export default CourseUnpurchased;