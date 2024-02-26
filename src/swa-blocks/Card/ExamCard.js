import React from "react"
import { View,StyleSheet, Image } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import SwaIcon from "../../swa-components/Icon/SwaIcon";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";

function ExamCard(){
return(
    <View style={styles.card}>
            <SwaCard
            width={325}
            height={138}
            borderRadius={4}
            backgroundColor="#B9DCFF"
            >
                <Image/>
                <Text style={styles.text}>Class XII CBSE Board Examination  </Text>
                <View style={styles.size}>
                    <View style={styles.foexam}>
                    <FontAwesome5 style={styles.icon} name="pen-square" size={24} color="grey" />
                    <Text style={styles.examcol}>4 Exams</Text>
                    </View>
                    <View style={styles.student}>
                    <FontAwesome style={styles.icon} name="user" size={24} color="grey" />
                    <Text style={styles.examcol}>1289 Students</Text>
                    </View>
                </View>
                <View style={styles.btn}>
                <SwaButton
                size="xxmedium"
                label="View Exams"
                labelColor="white"
                labelFontSize={18}

                />
                </View>
               
            </SwaCard>
    </View>
)
}

const styles = StyleSheet.create({
card:{
    height:140,
    width:328,
    borderWidth:1,
    borderColor:"#5AB0FF",
    marginLeft:5
},
text:{
    fontSize:16,
    fontWeight:700,
    bottom:55,
    left:50
},
examcol:{
    color:"grey"
},
size:{
    flexDirection:'row',
    bottom:45,
    left:55,
    justifyContent:"space-between"
},
student:{
    right:60,
    flexDirection:"row",
},
foexam:{
    flexDirection:"row",

},
icon:{
    marginRight:8    

},
btn:{
    position:"absolute",
    top:80,
    left:16
}
})

export default ExamCard;