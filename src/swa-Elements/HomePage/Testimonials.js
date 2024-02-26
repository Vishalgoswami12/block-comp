import React from "react"
import { View,StyleSheet,ScrollView } from "react-native";
import { Text } from "react-native-paper";
import CardTestimonial from "../../swa-blocks/Card/CardTestimonial";

function Testimonials(){
return(
    <View>
          <Text style={styles.text}>Testimonials</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
          {[1, 2, 3, 4, 5].map((item, index) => (
             <View key={index} style={[styles.cardContainer, index === 1 && styles.secondCardMargin]}>
                <CardTestimonial/>
                           </View>
      ))}
        </ScrollView>
    </View>
)
}
const styles = StyleSheet.create({
    text:{
        fontSize:24,
        marginTop:50,
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
})
export default Testimonials;