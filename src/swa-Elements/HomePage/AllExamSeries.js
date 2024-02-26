import React from"react"
import { View,StyleSheet,ScrollView } from "react-native";
import { Text } from "react-native-paper";
import ExamCard from "../../swa-blocks/Card/ExamCard";
import { FontAwesome6 } from '@expo/vector-icons';
function AllExamSeries(){
return(
    <View>
       <View style={styles.subcontainer}>
       <Text style={styles.text}>All Exam Series</Text>
       <View style={styles.rollcont}>
        <Text style={styles.enroll}> Enroll Now</Text>
        <FontAwesome6 style={styles.icon} name="angle-right" size={12} color="#0D80F2" />
       </View>
       </View>
              
               <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        {[1, 2, 3, 4, 5].map((item, index) => (
             <View key={index} style={[styles.cardContainer, index === 1 && styles.secondCardMargin]}>
                {/* <IASMCQTest/> */}
                <ExamCard/>
                 </View>
      ))}
    </ScrollView>
    </View>
)
}
const styles = StyleSheet.create({

    text:{
        fontSize:24,
        marginTop:20,
        fontWeight:500,
        marginLeft:15
    },
    scrollView: {
        flexDirection: "row",
        padding: 10,
      },
      cardContainer: {
        marginRight: 10, 
      },
      secondCardMargin: {
        marginLeft: 10,
      },
      subcontainer:{
        flexDirection:"row",
        justifyContent:"space-between"

      },
      enroll:{
        fontSize:12,
        fontWeight:500,
        color:"#0D80F2",
        right:8
      },
      rollcont:{
        flexDirection:"row",
        top:25
      },
      icon:{
        top:2
      }
})

export default AllExamSeries;