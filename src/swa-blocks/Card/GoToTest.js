import React from "react";
import { View,StyleSheet, ViewBase } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import { Foundation } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";
function GoToTest(){
return(
    <View style={styles.container}>
        {/* <SwaCard 
        width={340}
        height={149}
        borderRadius={10}
        backgroundColor="#D9EDFF"
        > */}
        <View style={{borderRadius:10, backgroundColor:"#D9EDFF", padding:10}}>
            <Text variant="labelMedium" style={styles.text}>Lorem ipsum dolor sit amet consecteturgh lorem ipsum dolor sit amet consectetur</Text>
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
            size="medium"
            theme={themeObject}
            label="Go to Test"
            labelColor="white"
            labelFontSize={16}
            >Go to Test</SwaButton>
            </View>
           
        </View>
    </View>
)
}

const styles = StyleSheet.create({
container:{
    borderWidth:1,
    borderColor:"#5AB0FF"
},
text:{
    linHeight:25,
     width:222,
     marginLeft:60   
},
test:{
    flexDirection:'row',
    alignItems:"center"
},
test1:{
    flexDirection:'row',
    alignItems:"center"
},
subcont:{
    flexDirection:"row",
    gap:20,
    marginLeft:60,
    marginTop:15
},
btn:{
    marginTop:15
}
})

export default GoToTest;