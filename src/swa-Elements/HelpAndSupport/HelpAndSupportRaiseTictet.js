import React from "react";
import { View,StyleSheet,ScrollView } from "react-native";
import { Text } from "react-native-paper";
import SwaTextInput from "../../swa-components/TextInput/swaTextInputIcon";
import SwaHelperText from "../../swa-components/HelperText/swaHelperText";
import { FontAwesome6 } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";

function HelpAndSupportRaiseTicket(){
  
return(
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.tckt} variant="titleLarge">Ticket ID - 1234567</Text>
        <View style={styles.inputwidth}>
        <SwaTextInput
      style={styles.input}
      mode="flat"
      disabled={false}
      
    />
        </View>
        <View style={styles.helper}>
        <SwaHelperText type="error">Max 250 Characters</SwaHelperText>
        </View>
        <Text style={styles.attach} variant="titleMedium">Add Attachment (Optional)</Text>
        <View style={styles.dashedBorder} >
            <Text variant="bodyMedium" style={styles.para}>Browse and chose the photo you want to upload from your computer</Text>
            <FontAwesome6 style={styles.plus} name="circle-plus" size={37} color="#008FFF" />
        </View>
        <View style={styles.btn}>
            <SwaButton mode="contained"
            theme={themeObject}
            size="medium"
            borderRadius={10}
            >
                Raise a Ticket
            </SwaButton>
        </View>
        </ScrollView>
)
}
const styles = StyleSheet.create({
  container:{
    padding:10
  },
      tckt:{
        fontWeight:600,
        marginLeft:20,
        marginTop:30
      },
      input:{
        height:140,
        backgroundColor:"#E2F1FF",
        marginTop:50,
        borderRadius:10
      },
     
      helper:{
        marginLeft:220,
        marginTop:20
      },
      attach:{
        marginTop:60,
      },
      dashedBorder: {
        height: 108,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-between",
        
      },
      para:{
            width:200,
            left:40,
            top:30
      },
      plus:{
        top:35,
        right:18
      },
      btn:{
        marginTop:150,
        alignSelf:"center"
           },
})
export default HelpAndSupportRaiseTicket;