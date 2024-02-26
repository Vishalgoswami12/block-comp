import React from "react";
import { View,StyleSheet, ViewBase } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import { Foundation } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";

function GoToTest(){
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
                <Text style={styles.qot}>15 + Test |</Text>
                </View>
                <View style={styles.test1}>
                <Foundation style={styles.icon} name="clipboard-notes" size={15} color="grey" />
                <Text style={styles.qot}>1500 + Questions </Text>
                </View>
            </View>
            <View style={styles.btn}>
            <SwaButton
            borderRadius={10}
            label="Go to Test"
            labelColor="white"
            labelFontSize={16}
            />
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
}
})

export default GoToTest;