import React from "react";
import { View,StyleSheet } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";

function MCQScreen (){
return(
    <View>
          <View style={styles.card}>
        <SwaAppBar
          backgroundColor="white"
          elevated={true}
          style={styles.appBar}
          title="Quiz Header"
        />
      </View>
      {/* <Text style={styles.testtext}>Quiz #1</Text> */}
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        height:800
    },
    card: {
        backgroundColor: "black",
        shadowColor: "black",
        shadowOffset: {
          width: 3,
          height: 7
        },
        shadowOpacity: 1,
        elevation: 11,
        bottom: 5
      },
      testtext: {
        bottom: 49,
        left: 50,
        fontSize: 16,
        fontWeight: 600
      },
})
export default MCQScreen;