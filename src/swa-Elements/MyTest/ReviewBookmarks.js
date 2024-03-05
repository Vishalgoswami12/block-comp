import React from "react"
import { View,StyleSheet,ScrollView } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import SwaButton from "../../swa-components/Button/swaButton";
import TestBookmarks from "../../swa-blocks/TestBookmarks/TestBookmarks";
function ReviewBookmarks(){
return(
    <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.card}>
            <SwaAppBar
                elevated={true}
                style={styles.appBar}
                title="Quiz Header"
                titleStyle={styles.title}
            />
        </View>
        <View style={styles.line}></View>
        <View style={styles.bookmark}>
            <Text style={styles.text} variant="titleMedium">Bookmarks</Text>
            <SwaButton
            mode="outlined"
            customWidth={190}
            borderRadius={10}
            >Go to Summary</SwaButton>
        </View>
        <View style={styles.line2}></View>
        {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={index} style={[styles.cardContainer, index === 1,2,3,4 && styles.secondCardMargin]}>
                <TestBookmarks/>
            </View>
        ))}
    </ScrollView>
)
}
const styles = StyleSheet.create({
    container:{
        height:3250
    },
    card: {
        backgroundColor: "black",
        shadowColor: "black",
        shadowOffset: {
          width: 3,
          height: 7
        },
        shadowOpacity: 1,
        elevation: 11,
        bottom: 5
      },
      title:{
        fontSize:16,
        fontWeight:600
      },
      bookmark:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:350,
        left:15,
        top:20
      },
      line: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginVertical: 10,
        width:350,
        top:10,
        left:20
      },
      line2: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginVertical: 10,
        width:350,
        top:30,
        left:20
      },
      text:{
        top:10
      },
      scrollView: {
        padding: 10,
      },
      cardContainer: {
        marginRight: 10, 
        top:-100,
        left:15
      },
      secondCardMargin: {
        // marginLeft: 10,
        marginTop:180
      },
})
export default ReviewBookmarks;