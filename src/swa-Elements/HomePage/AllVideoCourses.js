import { View, ScrollView, StyleSheet,TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import CardCourse from "../../swa-blocks/Card/CardCourse";
import { useNavigation } from '@react-navigation/native';
function AllVideoCoursee(){
    // const navigation = useNavigation();
return(
    <View>
        <View style={styles.textrow}>
        <Text style={styles.text}>All Video Courses</Text>
        <TouchableOpacity>
          <Text style={styles.seetext}>See All</Text>
        </TouchableOpacity>
        </View>
       
         <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <View key={index} style={[styles.cardContainer, index === 1 && styles.secondCardMargin]}>
          <CardCourse />
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
  textrow:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  seetext:{
    color:"#0D80F2",
    top:25,
    right:15
  }
});

export default AllVideoCoursee;