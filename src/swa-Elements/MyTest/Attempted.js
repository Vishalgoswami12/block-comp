import react from "react";
import { View,StyleSheet,ScrollView } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
import CardAttempt from "../../swa-blocks/Card/CardAttempt";
function Attempted(){
return(
    <View style={styles.container}>
          <View style={styles.card}>
        <SwaAppBar
        backAction={true}
        backgroundColor="white"
        elevated={true}
        style={styles.appBar}
        titleStyle={styles.title}
        />
       
        </View>
        <Text style={styles.testtext}>Tests</Text>
        <View style={styles.headline}>
        <Text style={styles.head}>All Test</Text>
        <Text style={styles.attempt}>Attempted</Text>
        </View>
      <ScrollView  contentContainerStyle={styles.scrollView}>
      {[1, 2, 3, 4, ].map((item, index) => (
             <View key={index} style={[styles.cardContainer, index === 1,2,3 && styles.secondCardMargin]}>
                <CardAttempt/>
                 </View>
      ))}
      </ScrollView>
      <View>
        <BottomNavigationBar/>
      </View>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        height:800
    } ,
    card:{
        backgroundColor: "black", 
        shadowColor: "black",
        shadowOffset: {
          width: 3,
          height: 7,
        },
        shadowOpacity: 1,
        // shadowRadius:7,
        elevation: 11,
        bottom:5
    },
    title:{
      fontSize:16,
      fontWeight:600
    },
    testtext:{
        bottom:49,
        left:50,
        fontSize:16,
        fontWeight:600
    },
    head:{
        fontSize:16,
        fontWeight:500,
        left:50
    },
    attempt:{
        fontSize:16,
        fontWeight:500,
        right:50
    },
    headline:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    scrollView: {
        padding: 10,
      },
      cardContainer: {
        marginRight: 10, 
        
      },
      secondCardMargin: {
        marginLeft: 5,
        marginTop:10
      },
   
   
   
})
export default Attempted;