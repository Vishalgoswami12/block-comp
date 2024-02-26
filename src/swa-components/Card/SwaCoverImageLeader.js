import React from "react"
import SwaCard from "./swaCard";
import { View,StyleSheet,Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Text } from "react-native-paper";
import SwaButton from "../Button/swaButton";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function SwaCoverImageLeader(){
return(
    <View style={styles.container}>
         <SwaCard
           borderRadius={10}
           width={328}
           height={110}
           coverImage={require("../../assets/image.jpg")}
           coverImageStyle={styles.img}
           title="Aryan(You)"
           titleStyle={styles.title}
         />
            <FontAwesome style={styles.icon} name="circle" size={28} color="#008FFF" />
            <Text style={styles.iconText} >4</Text>
            <Image style={styles.profile} source={require("../../assets/profile.jpg")} />
            <View style={styles.btn}>
            <Text style={styles.avg}>102/120</Text>
            <SwaButton
            size="small"
            backgroundColor="none"
            mode="outlined"
            label="Download"
            width={90}
            color="white"
            // height={120}
            />
            </View>
            <AntDesign style={styles.downicon} name="download" size={16} color="#193DAD" />   
            <Entypo style={styles.dot} name="dots-three-vertical" size={15} color="white" />        
    </View>
   
)

}
const styles = StyleSheet.create({
   img:{
    width:328,
    height: 130,
    bottom:10,
    left:-10
   },
   icon:{
    bottom:61,
    left:10
   },
   iconText:{
    bottom:86,
    color:"white",
    left:18
},
profile:{
    width:"20%",
    height:"20%",
    borderRadius:50,
    bottom:130,
    left:50,
},
title:{
    fontSize:20,
    color:"white",
    bottom:120,
    left:110
},
btn:{
    bottom:180,
    left:120
},
avg:{
    color:"white",
    left:15
},
downicon:{
    color:"white",
    bottom:210,
    left:230
},
dot:{
    bottom:290,
    left:300,
},
container:{
    bottom:240,
}
  });

export default SwaCoverImageLeader;