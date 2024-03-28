import React from "react";
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import SwaTextInput from "../../swa-components/TextInput/swaTextInputIcon";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";

function SignupScreen(){
return(
    <View style={styles.container}>
        <Text style={styles.title} variant="titleLarge">Get Started</Text>
        <View style={styles.inputcontainer}>
            <Text>Label</Text>
            <SwaTextInput
            mode="flat"
            style={styles.input}
            placeholder="912356780"
            keyboardType="numeric"
            textContentType="telephoneNumber"
            />
        </View>
        <View style={styles.btn}>
            <SwaButton
            mode="contained"
            theme={themeObject}
            borderRadius={10}
            size="large"
            labelFontSize={16}
            
            >Get OTP</SwaButton>

        </View>
    </View>
)
}
const styles = StyleSheet.create({
container:{
    backgroundColor:"#F3F3F3",
    height:800,
    padding:10
},
title:{
    marginTop:250,
},
input:{
    borderColor:"#5AB0FF",
    borderWidth:2,
    backgroundColor:"white",
    width:350,
    marginLeft:8
},
inputcontainer:{
    marginTop:40,
},
btn:{
    marginLeft:5,
    marginTop:40
}
})
export default SignupScreen;