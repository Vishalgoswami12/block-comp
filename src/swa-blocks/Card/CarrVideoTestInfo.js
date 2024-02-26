import React from "react"
import { View,StyleSheet } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { EvilIcons } from '@expo/vector-icons';
import { Text } from "react-native-paper";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function CardVideoTest(){
return(
    <View>
        <SwaCard 
        width={399}
        height={40}
        borderRadius={10}
        />
           <View style={styles.iconText}>
           <EvilIcons name="clock" size={24} color="black" />
           <Text style={styles.time}>8h 45m</Text>
           </View>
           <View style={styles.iconStudent}>
           <FontAwesome5 name="user" size={18} color="black" />
           <Text style={styles.time}>8.5k+ Students</Text>
           </View>
           <View style={styles.iconResource}>
           <Feather name="book-open" size={18} color="black" />
           <Text style={styles.resource}>100+ PDF Resources</Text>
           </View>
           <View style={styles.test}>
           <SwaCard 
        width={399}
        height={40}
        borderRadius={10}
        />
           <View style={styles.iconText}>
           <EvilIcons name="clock" size={24} color="black"/>
           <Text style={styles.time}>10+ hours of Tests</Text>
           </View>
           <View style={styles.iconStudentSec}>
           <FontAwesome5 name="user" size={17} color="black" />
           <Text style={styles.time}>8.5k+ Students</Text>
           </View>
           <View style={styles.iconResourceSec}>
           <MaterialIcons name="event-note" size={20} color="black" />
           <Text style={styles.resource}>15+ Tests</Text>
           </View>
       </View>
       
    </View>
)
}
const styles = StyleSheet.create({
time:{
    left:26,
    bottom:17,
    fontWeight:500,
},
iconText:{
    bottom:37,
    left:10,
},
iconStudent:{
    left:110,
    bottom:75,
},
resource:{
    left:20,
    bottom:20
},
iconResource:{
    left:255,
    bottom:109
},
test:{
    bottom:90
},
iconStudentSec:{
    left:180,
    bottom:72
},
iconResourceSec:{
    left:320,
    bottom:108
}
})
export default CardVideoTest;