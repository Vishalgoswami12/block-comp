import React,{useState} from "react";
import { View,StyleSheet,TouchableOpacity,Modal } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { MaterialIcons,FontAwesome6 } from '@expo/vector-icons';
import { Text } from "react-native-paper";
import DownLoadQuality from "../../swa-blocks/Card/DownloadQuality";
function PrefencesScreen(){
    const [showDialog, setShowDialog] = useState(false);
return(
    <View style={{padding:"2%",paddingLeft:"4%"}}>
           <TouchableOpacity onPress={() => setShowDialog(true)}>
        <View style={{paddingTop:"8%"}}>
        <View style={{width:360,borderRadius:10, backgroundColor:"#E2F1FF",padding:10}}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",gap:40}}>
                <MaterialIcons name="hd" size={24} color="black" />
            <Text style={{}} variant="titleMedium">Streaming Quality</Text>
                </View>
           
            <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
            </View>
        </View>
        </View>
    </TouchableOpacity>
    <Modal visible={showDialog} animationType="slide">
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <DownLoadQuality onClose={() => setShowDialog(false)} />
                </View>
            </Modal>
        <View style={{paddingTop:"8%"}}>
        <View style={{width:360,borderRadius:10, backgroundColor:"#E2F1FF",padding:10}}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",gap:40}}>
                <MaterialIcons name="notifications-active" size={24} color="black" />
            <Text style={{}} variant="titleMedium">Notificationn</Text>
                </View>
           
            <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
            </View>
        </View>
        </View>
        <View style={{paddingTop:"8%"}}>
        <View style={{width:360,borderRadius:10, backgroundColor:"#E2F1FF",padding:10}}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",gap:40}}>
                <FontAwesome6 name="unlock-keyhole" size={24} color="black" />
            <Text style={{}} variant="titleMedium">Set Pin</Text>
                </View>
           
            <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
            </View>
        </View>
        </View>
        <View style={{paddingTop:"8%"}}>
        <View style={{width:360,borderRadius:10, backgroundColor:"#E2F1FF",padding:10}}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",gap:40}}>
                <MaterialIcons name="perm-identity" size={24} color="black" />
            <Text style={{}} variant="titleMedium">Permission</Text>
                </View>
            </View>
        </View>
        </View>
        <View style={{marginTop:40,marginLeft:10}}>
        <View style={{ width:340}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <View style={{flexDirection:"row",gap:40,}}>
            <FontAwesome6 name="brush" size={24} color="#868686" />
            <Text style={{ color:"#868686"}} variant="titleMedium">Theme</Text>
            </View>
     
            <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
            </View>
            </View>
        </View>
    </View>
)
}
const styles = StyleSheet.create({

})
export default PrefencesScreen;