import React from "react"
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";

function TestBookmarks(){
return(
    <View>
         <View style={styles.subconatiner}>
            <Text><Text style={styles.booktext}>MATHS/</Text>QUESTION 1</Text>
            <View style={styles.iconContainer}>
            <FontAwesome style={styles.icon} name="bookmark" size={24} color="#175CCC" />
            <MaterialCommunityIcons  name="flag-outline" size={24} color="black" />
            </View>
            </View>
            <Text style={styles.questext}>Lorem ipsum dolor sit amet consectetur adipiscing elit? </Text>
            <View>
            <View style={styles.option}>
                <Text style={styles.optiontext}>a) Option</Text>
            </View>
          
            <View style={styles.optionb}>
                <Text style={styles.optiontext}>b) Option</Text>
            </View>
            <View style={styles.optionc}>
                <Text style={styles.optiontext}>c) Option</Text>
            </View>
            <View style={styles.optiond}>
                <Text style={styles.optiontext}>d) Option</Text>
            </View>
        </View>
        <View style={styles.solu}>
        <Text style={styles.font}>Solution</Text>
        <Text style={styles.calc}>d) Lorem Ipsum</Text>
        <Text style={styles.calc1}> x + y = 209 Putting y = 109 x + 109 = 209 x = 209 - 109 x = 100</Text>
        </View>
        <View style={styles.btn}>
        <SwaButton
        mode="outlined"
        backgroundColor="white"
        size="medium"
        label="Show Answer"
        labelColor="grey"
        />
        </View>
      
    </View>
)
}
const styles = StyleSheet.create({
    subconatiner:{
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    iconContainer: {
        flexDirection: "row",
      },
      icon:{
        marginRight:28
    },
    booktext:{
        fontWeight:700
    },
    questext:{
        fontSize:16,
        fontWeight:700,
        width:328,
        top:20
    },
    option:{
        top:40,
        width:328,
        height:40,
    borderWidth:1,
    borderColor:"#329FFF",
    borderRadius:10,
    },
    optiontext:{
        top:7,
        left:8
    },
    optionb:{
        top:50,
        width:328,
        height:40,
    borderWidth:1,
    borderColor:"#329FFF",
    borderRadius:10,
    },
    optionc:{
        top:60,
        width:328,
        height:40,
    borderWidth:1,
    borderColor:"#329FFF",
    borderRadius:10,
    },
    optiond:{
        top:70,
        width:328,
        height:40,
    borderWidth:1,
    borderColor:"#329FFF",
    borderRadius:10,
    },
    solu:{
        top:100,
        left:5
    },
    font:{
        fontSize:16,
        fontWeight:700
    },
    calc:{
        width:110,
        lineHeight:20,
        letterSpacing:0.5
    },
    calc1:{
        width:110,
        lineHeight:20,
        letterSpacing:0.5,
        left:14
    },
    btn:{
        top:140,
    }
})
export default TestBookmarks;