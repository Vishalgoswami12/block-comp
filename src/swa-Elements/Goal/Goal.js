import React from "react"
import { View,StyleSheet } from "react-native";
import GoalBlock from "../../swa-blocks/Goal/GoalBlock";


function Goal(){
return(
    <View style={styles.container}>
      <GoalBlock/>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        height:1130,
    },
    
})
export default Goal;