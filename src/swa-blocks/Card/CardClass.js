import React from "react";
import SwaCard from "../../swa-components/Card/swaCard";
import SwaAvatar from "../../swa-components/Avatar/SwaAvatar";
import SwaChip from "../../swa-components/Chip/swaChip";
import { Text } from "react-native-paper";
import SwaActivityIndicator from "../../swa-components/ActivityIndicator/SwaActivityIndicator";
import { View,StyleSheet } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

function CardClass() {
  return (
    <View>
      <View style={styles.fontcard}>
     
      <SwaCard backgroundColor="#E2F1FF"
      borderRadius={9}
       width={350}
       height={90} >
        <View style={styles.card}>
        <FontAwesome6  name="circle-play" size={24} color="#329FFF" />
        <Text style={styles.text}>Quis autem vel eum iure reprehenderit qui in ea video heading</Text>
        <MaterialIcons name="file-download" size={24} color="#329FFF" />
        </View>
        <View style={styles.chipcard}>
          <SwaChip 
          style={styles.chip}
          textStyle={styles.textchip}
          >MP Patwari C1 L2</SwaChip>
          <Text style={styles.time}>| 20:13 min</Text>
        </View>
      </SwaCard>
      </View>
      <View style={styles.fontcard1}>
     
     <SwaCard backgroundColor="#E2F1FF"
     borderRadius={9}
      width={350}
      height={90} >
       <View style={styles.card}>
       <MaterialCommunityIcons name="note-text-outline" size={24} color="#329FFF" />
       <Text style={styles.text}>Quis autem vel eum iure reprehenderit qui in ea video heading</Text>
       <MaterialIcons name="file-download" size={24} color="#329FFF" />
       </View>
       <View style={styles.chipcard}>
         <SwaChip 
         style={styles.chip}
         textStyle={styles.textchip}
         >MP Patwari C1 L2</SwaChip>
         <Text style={styles.time}>| 10 Pages</Text>
       </View>
     </SwaCard>
     </View>
     <View style={styles.fontcard2}>
     
     <SwaCard backgroundColor="#E2F1FF"
     borderRadius={9}
      width={350}
      height={90} >
       <View style={styles.card}>
       <MaterialCommunityIcons name="chat-question-outline" size={24} color="#329FFF" />
       <Text style={styles.text}>Quis autem vel eum iure reprehenderit qui in ea video heading</Text>
       </View>
       <View style={styles.chipcard}>
         <SwaChip 
         style={styles.chip}
         textStyle={styles.textchip}
         >MP Patwari C1 L2</SwaChip>
         <Text style={styles.time}>| 15 Qns | 20 min</Text>
       </View>
     </SwaCard>
     </View>
    </View>
  );
}
const styles = StyleSheet.create({
card:{
 flexDirection:"row",
 bottom:60,
 width:320,
 
},
text:{
  fontSize:12,
  color:"#175CCC",
  left:5
},
fontcard:{
  top:120,
  left:10
},
fontcard1:{
  top:140,
  left:10
},
fontcard2:{
  top:160,
  left:10
}
,
chip:{
  width:112,
  height:30,
  backgroundColor:"#0D80F2",
  borderRadius:10
},
textchip:{
  color:"white",
  fontSize:9
},
chipcard:{
  flexDirection:"row",
  bottom:55,
  left:20
},
time:{
  left:9,
  top:3,
  color:"#727272",
  fontSize:14
}
})
export default CardClass;
