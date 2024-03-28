import React from "react";
import { View,StyleSheet,ScrollView } from "react-native";
import { Text } from "react-native-paper";
import SwaTextInput from "../../swa-components/TextInput/swaTextInputIcon";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";

function Profile(){
return(
    <ScrollView contentContainerStyle={styles.container}>
<View style={styles.img}>
</View>
<Text style={styles.profile} variant="labelLarge">
Change Profile Picture
</Text>
<View style={styles.inputcontain}>
    <Text>Name</Text>
    <View style={{}}>
    <SwaTextInput
    mode="outlined"
    outlineColor="#008FFF"
    placeholder={"User"}
    style={styles.inputname}
    />
    <MaterialCommunityIcons style={styles.edit} name="pencil-outline" size={24} color="black" />
    </View>
  
</View>
<View style={styles.inputcontain}>
    <Text>Email (Optional)</Text>
    <SwaTextInput
    mode="outlined"
    outlineColor="#008FFF"
    placeholder={"example@gmail.com"}
    style={styles.inputname}
    />
    <MaterialCommunityIcons style={styles.edit} name="pencil-outline" size={24} color="black" />
</View>
<View style={styles.inputcontain}>
    <Text>Mobile number</Text>

    <SwaTextInput
    mode="outlined"
    outlineColor="#008FFF"
    placeholder={"+91 987654328"}
    style={styles.inputname}
    />
    <MaterialCommunityIcons style={styles.edit} name="pencil-outline" size={24} color="black" />
</View>
<View style={styles.btn}>
    <SwaButton 
    mode="contained"
    theme={themeObject}
    size={"medium"}
    borderRadius={10}
    >
        Save Details
    </SwaButton>
</View>
</ScrollView>
)
}
const styles = StyleSheet.create({
    container:{
        height:900,
        backgroundColor:"#F3F3F3"

    },
      img:{
        width:120,
        height:120,
        backgroundColor:"#D9EDFF",
        borderRadius:60,
        alignSelf:"center",
        marginTop:40
      },
      profile:{
        color:"#175CCC",
        textAlign:"center",
        textDecorationLine:"underline",
        marginTop:10
      },
      inputname:{
        backgroundColor:"white",
        width:328,
      },
      inputcontain:{
        // marginTop:80,
        marginLeft:20
      },
      edit:{
        bottom:40,
        marginLeft:300
      },
      btn:{
        marginTop:200,
        marginLeft:20
      },
})
export default Profile;