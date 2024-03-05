import React from "react"
import { View,StyleSheet,ScrollView } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
function Examination(){
return(
    <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <SwaAppBar
                elevated={true}
                style={styles.appBar}
                title="Examination"
                titleStyle={styles.title}
                backAction={true}
            />
        </View>
        <View style={styles.tab}>
            <Text variant="titleMedium">
                My Exams
            </Text>
            <Text variant="titleMedium">Attempted</Text>
        </View>
        {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={index} style={[styles.cardContainer, index === 1,2,3,4 && styles.secondCardMargin]}>
                
            </View>
        ))}
        </ScrollView>
)
}
const styles = StyleSheet.create({
    container:{
        height:3250
    },
    card: {
        backgroundColor: "black",
        shadowColor: "black",
        shadowOffset: {
          width: 3,
          height: 7
        },
        shadowOpacity: 1,
        elevation: 11,
        bottom: 5
      },
      title:{
        fontSize:16,
        fontWeight:600
      },
      tab:{
        width:270,
        flexDirection:"row",
        justifyContent:"space-between",
        left:60,
        top:30
      }
})
export default Examination;