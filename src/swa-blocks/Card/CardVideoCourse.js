import React from "react"
import SwaCard from "../../swa-components/Card/swaCard"
import { View,StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { Fontisto } from '@expo/vector-icons';
import SwaChip from "../../swa-components/Chip/swaChip";
import SwaButton from "../../swa-components/Button/swaButton";

function CardVideoCourse(){
return(
    <View>
     <SwaCard
     width={328}
     height={296}
     >
        <Text style={styles.text} variant="titleMedium">Foundation Batch for Police</Text>
        <View style={styles.subcont}>
            <Text>by Manish S Pandey</Text>
            <View style={styles.iconsize}>
            <Fontisto name="clock" size={14} color="black" />
            <Text style={styles.hrs}>18 hr 45mins </Text>
            </View>
        </View>
        <Text style={styles.sub}>Subjects</Text>
        <View style={styles.chipdir}>
            <SwaChip 
            style={styles.chip}
            mode="contained"
            textStyle={{color:"white"}}
            >
                Hindi
            </SwaChip>
            <SwaChip 
            style={styles.chip1}
            mode="contained"
            textStyle={{color:"white"}}
            >
                Mathmatics
            </SwaChip>
            <SwaChip 
            style={styles.chip2}
            mode="contained"
            textStyle={{color:"white"}}
            >
                Physics
            </SwaChip>
            <SwaChip 
            style={styles.chip2}
            mode="contained"
            textStyle={{color:"white"}}
            >
                Chemistry
            </SwaChip>
            <SwaChip 
            style={styles.chip3}
            mode="contained"
            textStyle={{color:"white"}}
            >
                Chemistry
            </SwaChip>
        </View>
     </SwaCard>
     <SwaCard
      width={328}
      height={160}
     >
          <Text style={styles.text2} variant="titleMedium">Foundation Batch for Police</Text>
          <View style={styles.subcont1}>
            <Text>by Manish S Pandey</Text>
           <SwaButton
           
           mode="outlined"
           backgroundColor="white"
           borderRadius={10}
           label="Go to Videos"
           size="xsmall"
           width={10}
           />
        </View>
     </SwaCard>
    </View>
  
)
}

const styles = StyleSheet.create({
    text:{
        top:50,
    
    },
    iconsize:{
        flexDirection:"row",
    },
    subcont:{
        flexDirection:"row",
        justifyContent:"space-between",
       top:50
    },
    hrs:{
        bottom:3,
        left:5
    },
    sub:{
        top:65
    },
    chip:{
        width:70,
        height:33,
        backgroundColor:"#175CCC",
        color:"white"
    },
    chip1:{
        width:109,
        height:33,
        backgroundColor:"#175CCC",
        color:"white"
    },
    chip2:{
        width:102,
        height:33,
        backgroundColor:"#175CCC",
        color:"white",

    },
    chip3:{
        width:102,
        height:33,
        backgroundColor:"#175CCC",
        color:"white",
        right:90,
        
    },
    chipdir:{
        flexDirection:"row",
        top:70,
        flexWrap:"wrap",
        justifyContent:"space-between",
        
    },
    subcont1:{
        flexDirection:"row",
        justifyContent:"space-between",
    }
})
export default CardVideoCourse