import React from "react";
import { View } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import { MaterialIcons,FontAwesome6,MaterialCommunityIcons } from '@expo/vector-icons';


function CardCourseAnalytic() {
  return (
   <View>
    <View style={{width:"100%",borderRadius:10, padding:10}}
    backgroundColor="white">
      <View>
        <Text style={{width:250,}} variant="titleSmall">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</Text>
       <View style={{flexDirection:"row", marginTop:8}}>
       <Text variant="labelSmall">Solving JEE Past Year Questions</Text>
       <View style={{flexDirection:"row",marginLeft:8}}>
       <MaterialIcons name="circle" size={16} color="#B9DCFF" />
       <Text style={{marginLeft:4}} variant="labelSmall">Video Lecture</Text>
       </View>
       </View>
       <View style={{marginTop:10, flexDirection:"row", justifyContent:"space-between"}}>
       <View style={{flexDirection:"row"}}>
      <FontAwesome6 style={{marginTop:7}} name="clock" size={16} color="black" />
      <View style={{marginLeft:10}}>
        <Text variant="labelMedium">9:23PM</Text>
        <Text variant="labelSmall">Started</Text>
      </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <FontAwesome6 style={{marginTop:7}} name="clock" size={16} color="black" />
      <View style={{marginLeft:10}}>
        <Text variant="labelMedium">10:54PM</Text>
        <Text variant="labelSmall">Completed</Text>
      </View>
      </View>
       </View>
     <View style={{flexDirection:"row",justifyContent:"space-between"}}>
     <View style={{flexDirection:"row"}}>
     <MaterialCommunityIcons  style={{marginTop:7, marginLeft:-4}} name="cookie-outline" size={24} color="black" />
      <View style={{marginTop:5, marginLeft:3}}>
        <Text variant="labelMedium">10:54PM</Text>
        <Text variant="labelSmall">Completed</Text>
      </View>
      </View>
      <View style={{flexDirection:"row", marginTop:10}}>
      <FontAwesome6 name="fire" size={18} color="#FF7100" />
      <Text style={{color:"#FF7100", marginLeft:5}} variant="labelMedium">Peak Productivity</Text>
      </View>
     </View>
      </View>
    </View>

   </View>
  );
}

export default CardCourseAnalytic;
