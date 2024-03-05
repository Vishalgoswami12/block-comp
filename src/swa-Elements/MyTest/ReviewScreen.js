import React from "react"
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import ScoreCard from "../../swa-blocks/Card/ScoreCard";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle"
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
function ReviewScreen (){
return(
    <View style={styles.container}>
         <View style={styles.card}>
            <SwaAppBar
                elevated={true}
                style={styles.appBar}
                title="Review Result"
                titleStyle={styles.title}
            />
        </View>
        <Text style={styles.titltlar} variant="titleLarge">Hooray! Your test is completed</Text>
        <View style={styles.score}>
            <ScoreCard/>
        </View>
        <View style={styles.btncontainer}>
            <SwaButton
            mode="outlined"
            borderRadius={10}
            size='small'
            customWidth={170}
            >
                Review Bookmark
            </SwaButton>
            <SwaButton
            mode="outlined"
            borderRadius={10}
            size='small'
            customWidth={160}

            
            >
                Check Answer
            </SwaButton>
        </View>
        <View style={styles.btnattempt}> 
        <SwaButton
        mode="contained"
        theme={themeObject}
        size="xmedium"
        >
            Re-Attempt
           
        </SwaButton>
        </View>
     <Text style={styles.texttests} variant="titleSmall">Go to My Tests</Text>
     <View style={styles.bar}>
        <BottomNavigationBar/>
     </View>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        height:900
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
      titltlar:{
        fontWeight:600,
        color:"#193DAD",
        left:15,
        top:40
      },
      title:{
        fontSize:16,
        fontWeight:600
      },
      score:{
        left:15,
        top:120
        
      },
      btncontainer:{
        flexDirection:"row",
        top:80,
        width:360,
        justifyContent:"space-between",
        left:15
      },
      btnattempt:{
        top:100
      },
      texttests:{
        color:"#175CCC",
        top:120,
        textAlign:"center"
      },
      bar:{
        top:120
      },
      
})

export default ReviewScreen;