import React from "react"
import { View,StyleSheet, Image } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import SwaIcon from "../../swa-components/Icon/SwaIcon";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";
function ExamCard(){
return(
    <View style={styles.card}>
            <View style={{borderRadius:10, backgroundColor:"#B9DCFF",padding:10}}>
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
                borderRadius={10}
                labelFontSize={18}
                mode={"contained"}
                theme={themeObject}
                >
                    View Exams
                </SwaButton>
                </View>
               
            </View>
    </View>
)
}

const styles = StyleSheet.create({
card:{
    width:328,
    borderWidth:1,
    borderColor:"#5AB0FF",
    marginLeft:5,
    borderRadius:10
},
text:{
    fontSize:16,
    fontWeight:700,
    marginLeft:50
},
examcol:{
    color:"grey"
},
size:{
    flexDirection:'row',
    marginLeft:50,
    marginTop:8,
    gap:40
},
student:{
    flexDirection:"row",
},
foexam:{
    flexDirection:"row",

},
icon:{
    marginRight:8    

},
btn:{
   marginTop:20,
   alignSelf:"center"
}
})

export default ExamCard;