import React from "react"
import { View,ScrollView,StyleSheet } from "react-native"
import CardVideoCourse from "../../swa-blocks/Card/CardVideoCourse"

function VideoCourse(){
return(
    <View>
          <ScrollView  contentContainerStyle={styles.scrollView}>
        {[1, 2, 3, 4, 5].map((item, index) => (
             <View key={index} style={[styles.cardContainer, index === 1,2,3,4 && styles.secondCardMargin]}>
                <CardVideoCourse/>
                 </View>
      ))}
    </ScrollView>
    </View>
)
}
const styles = StyleSheet.create({
    scrollView: {
        flexDirection: "column",
        // padding: 10,
      },
      cardContainer: {
        marginRight: 10, 
      },
      secondCardMargin: {
        marginTop:25,
      },
})
export default VideoCourse