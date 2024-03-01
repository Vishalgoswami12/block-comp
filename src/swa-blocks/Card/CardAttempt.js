import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import SwaCard from "../../swa-components/Card/swaCard";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
import { FontAwesome6 } from '@expo/vector-icons';

function CardAttempt(){
return(
    <View style={styles.maincard}>
        <SwaCard
        width={328}
        height={169}
        backgroundColor="#E2F1FF"
        borderRadius={10}
        >
            <View style={styles.testcard}>
            <MaterialCommunityIcons name="book-open-outline" size={42} color="grey" />
            <Text variant="titleSmall" style={styles.cardtest}>Lorem ipsum dolor sit amet consecteturgh lorem ipsum dolor sit amet consectetur</Text>
            </View>
            <View>
        <Text variant="bodySmall" style={styles.quesicon}>
        <FontAwesome6 name="file-circle-question" size={12} color="grey" /> 120 Questions
            </Text>   
           
            </View>
            <View style={styles.btnposition}>
                <View style={styles.syllabusbtn}>
                    <SwaButton
                    size="xsmall"
                        labelColor="black"
                        borderRadius={10}
                        mode="outlined"
                        backgroundColor="#E2F1FF"
                    >
                        Re-attempt
                    </SwaButton>
                </View>
                <View>
                <SwaButton
                    size="xsmall"
                        labelColor="white"
                        borderRadius={10}
                        // backgroundColor="#E2F1FF"
                    >
                        View Analytics
                    </SwaButton>
                </View>
            </View>
        </SwaCard>
       </View>
       
   
)
}
const styles = StyleSheet.create({
    maincard:{
        top:50,
        left:20
    },
    testcard:{
        flexDirection:"row",
        bottom:60
    },
    cardtest:{
        width:234,
        left:20

    },
    btnposition:{
        flexDirection:"row",
        justifyContent:"space-between",
        bottom:40
    },
    quesicon:{
        bottom:55,
        left:60
    },
    syllabusbtn:{
        width:142,
        height:39,
        borderWidth:1,
        borderColor:'#008FFF',
        borderRadius:10
    },
})
export default CardAttempt;