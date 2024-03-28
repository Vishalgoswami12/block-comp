import React from "react";
import { View,StyleSheet,ScrollView } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from "react-native-paper";
import SwaListAccordian from "../../swa-components/List/swaListAccordian";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
function HelpAndSupport(){
    const faqs = [
        { title: "My money is debited, but the purchase is not confirmed?" },
        { title: "The Video Stream is not working as expected?" },
        { title: "My money is debited, but the purchase is not confirmed?" },
        { title: "I am not able to sign in my account" },
        { title: "I am not able to sign in my account" },
        { title: "I am not able to sign in my account" },
        { title: "I am not able to sign in my account" }
      ];
return(
         <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.tckt}>
        <MaterialIcons name="drafts" size={24} color="#175CCC" />
        <Text style={{color:"#175CCC", left:5}} variant="titleSmall">My Tictets</Text>
        </View>
        <Text style={styles.faq} variant="titleLarge">FAQ's</Text>
         {faqs.map((faq, index) => (
        <View key={index}style={[styles.accorcontain, index !== 0 && styles.topMargin]}>
          <SwaListAccordian
            title={faq.title}
            style={styles.accor}
            titleStyle={styles.accortitle}
          />
        </View>
      ))}
        <Text style={styles.query} variant="titleMedium">QUERY NOT RESOLVED YET?</Text>
        </ScrollView>
)
}
const styles = StyleSheet.create({
    container:{
        height:900,
        padding:10
    },
      tckt:{
        flexDirection:'row',
        marginLeft:280,
        marginTop:30
      },
      faq:{
        fontWeight:600,
        marginTop:70,
      },
      accor:{
        backgroundColor:"#E2F1FF",
        width:"100%",
        height:64,
        borderRadius:10
    
      },
      accortitle:{
        fontSize:12,
        fontWeight:500,
        color:"#282828"
      },
      accorcontain:{
        marginTop:50
      },
      topMargin:{
       marginTop:5
      },
      query:{
        textAlign:"center",
        marginTop:100,
        color:"#175CCC"
      },
      bar:{
        marginTop:180
      }
      
})
export default HelpAndSupport;