import React from "react"
import { View,StyleSheet,ScrollView } from "react-native";
import { MaterialCommunityIcons,FontAwesome6,MaterialIcons } from '@expo/vector-icons';
import { Text } from "react-native-paper";
import CardCourseAnalytic from "../../swa-blocks/Card/CardCourseAnalytic";
function AnalyticProfile(){
    const analyticsData = [1, 2, 3];
return(
    <View style={{padding:10, backgroundColor:"#BBBBBB"}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.datecard}>
            <View style={styles.iconbox}>
            <MaterialCommunityIcons style={{padding:3}} name="calendar-blank-outline" size={24} color="black" />
            </View>
            <View style={{marginLeft:45, marginTop:-33}}>
            <Text variant="titleSmall">25th Jan ‘23</Text>
            <Text variant="bodySmall">14hr 02mins</Text>
            </View>
            </View>
            <View style={styles.datecard}>
            <View style={styles.iconbox}>
            <MaterialCommunityIcons style={{padding:3}} name="calendar-blank-outline" size={24} color="black" />
            </View>
            <View style={{marginLeft:45, marginTop:-33}}>
            <Text variant="titleSmall">25th Jan ‘23</Text>
            <Text variant="bodySmall">14hr 02mins</Text>
            </View>
            </View>
            <View style={styles.datecard}>
            <View style={styles.iconbox}>
            <MaterialCommunityIcons style={{padding:3}} name="calendar-blank-outline" size={24} color="black" />
            </View>
            <View style={{marginLeft:45, marginTop:-33}}>
            <Text variant="titleSmall">25th Jan ‘23</Text>
            <Text variant="bodySmall">14hr 02mins</Text>
            </View>
            </View>
        </ScrollView>
        <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10, 
        marginTop:20
      }}
    />
    <View>  
        {analyticsData.map((item, index) => (
                                  <View key={index} style={{ marginTop: index >= 1 ? 20 : 0 }}>
                                  <CardCourseAnalytic />
                              </View>
  
            ))}
    </View>
    </View>
)
}
const styles = StyleSheet.create({
datecard:{
    width:146,
    height:56,
    backgroundColor:"#5AB0FF",
    borderRadius:16,
    padding:7,
    marginRight: 10,
},
iconbox:{
    width:32,
    height:32,
    backgroundColor:"#8CC6FF",
    borderRadius:5,
    marginTop:5
},
})
export default AnalyticProfile;