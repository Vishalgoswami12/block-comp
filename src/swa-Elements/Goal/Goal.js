import React from "react"
import { View,StyleSheet } from "react-native";
import GoalBlock from "../../swa-blocks/Goal/GoalBlock";


function Goal(){
return(
    <View style={styles.container}>
      <GoalBlock
    //   theme={{backgroundColor:"black"}}
      />
    </View>
)
}
const styles = StyleSheet.create({
    
})
export default Goal;