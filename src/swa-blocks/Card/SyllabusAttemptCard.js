import React from "react";
import { View,StyleSheet, ViewBase } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import { Foundation } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";

function SyllabusAttemptCard(){
return(
    <View style={styles.container}>
        <SwaCard 
        width={340}
        height={149}
        borderRadius={10}
        backgroundColor="#D9EDFF"
        >
            <Text style={styles.text}>Lorem ipsum dolor sit amet consecteturgh lorem ipsum dolor sit amet consectetur</Text>
            <View style={styles.subcont}>
                <View style={styles.test}>
                <Foundation style={styles.icon} name="clipboard-notes" size={15} color="grey" />
                <Text style={styles.qot}>120 Question</Text>
                </View>
            </View>
            <View style={styles.btn}>
                <View style={styles.btncontain}>
                    <View style={styles.btnml1}>
                    <SwaButton
                    size="small"
                    mode="outlined"
                    backgroundColor="#D9EDFF"
                    borderRadius={10}
                    label="Syllabus"
                    borderColor="#008FFF"
           />
                    </View>
               
           <View style={styles.btnml}>
           <SwaButton
                    size="small"
                    mode="contained"
                    // backgroundColor="#D9EDFF"
                    borderRadius={10}
                    label="Attempt"
           />
           </View>
           
                </View>
           
            </View>
           
        </SwaCard>
    </View>
)
}

const styles = StyleSheet.create({
container:{
    width:345,
    height:152,
    borderWidth:1,
    borderColor:"#5AB0FF"
},
text:{
    fontSize:16,
    fontWeight:600,
    linHeight:25,
    bottom:57,
    left:25,

},
test:{
    flexDirection:'row',
},
test1:{
    flexDirection:'row',
    left:20,
    top:0
},
subcont:{
    flexDirection:"row",
    bottom:54,
    left:25
},
qot:{
    left:10
},
icon:{
    top:2
},
btn:{
    position:"absolute",
    bottom:10,
},
btncontain:{
    flexDirection:'row',

    top:10
},
btnml:{
    left:30,
},
})

export default SyllabusAttemptCard;