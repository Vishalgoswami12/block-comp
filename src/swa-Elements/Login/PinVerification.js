import React from "react";
import { View,StyleSheet } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import SwaHelperText from "../../swa-components/HelperText/swaHelperText";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";
import { OtpInput } from "react-native-otp-entry";
function PinVerfication(){
return(
    <View style={styles.container}>
      <Text style={styles.text} variant="bodyMedium">
          Please enter the verification code we’ve sent you account
        </Text>
        <View style={styles.inputcontain}>
        <OtpInput
         numberOfDigits={4}
         focusColor="#5AB0FF"
        />
        </View>
       
        <View style={styles.helper}>
            <SwaHelperText type="error">Invalid PIN Please try again</SwaHelperText>
        </View>
        <View style={styles.btn}>
            <SwaButton
            mode="contained"
            theme={themeObject}
            size="medium"
            borderRadius={10}
            >Login</SwaButton>
        </View>
        <Text variant="labelMedium" style={styles.forgot}>Forgot PIN?</Text>
    </View>
)
}
const styles = StyleSheet.create({
      text: {
        alignSelf: "center",
        textAlign:"center",
        marginTop: 190,
        width:330
      },
      inputcontain:{
        width:250,
        marginTop:20,
        alignSelf:"center"
      },
      helper:{
        marginTop:40,
        marginLeft:60
      },
      btn:{
        marginTop:50,
        marginLeft:35
      },
      forgot:{
        color:"#175CCC",
        alignSelf:"center",
        marginTop:30
      }
})

export default PinVerfication;