import React from "react"
import { Text } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { View,StyleSheet,Image } from "react-native";
import SwaCard from '../../swa-components/Card/swaCard';

function SwaLeaderCard(){
    return(
        <View style={styles.cont}>
        <SwaCard
        backgroundColor="#D9EDFF"
        borderRadius={10}
        width={328}
        title="Nicolas Pooran"
        titleStyle={styles.title}
        />
       <Image style={styles.img} source={require("../../assets/gold medal.png")}  />
        <View style={styles.container}>
            <Text style={styles.textCol}>3</Text>
            {/* <AntDesign style={styles.antIcon} name="caretdown" size={70} color="red" /> */}
        </View>
        <AntDesign style={styles.antIcon} name="caretdown" size={14} color="red" />
        <AntDesign style={styles.downicon} name="download" size={16} color="#193DAD" />
        <Entypo style={styles.dot} name="dots-three-vertical" size={15} color="#193DAD" />
        <Text style={styles.average}>110/120</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    title:{
        fontWeight:550,
        position:"absolute",
        left:34
    },
    textCol:{
    color:"red"
    },
    container:{
        position:"absolute",
        left:210,
        top:24,
        justifyContent:"space-between"
    },
    antIcon:{
        position:"absolute",
        left:222,
        top:25
    },
    downicon:{
        left:258,
        bottom:124
    },
    dot:{
        left:299,
        bottom:140
    },
    average:{
        bottom:135,
        left:59
    },
    img:{
        width:"20%",
        height:"20%",
        bottom:75
    },
    cont:{
        bottom:30
    }
    })
export default SwaLeaderCard;