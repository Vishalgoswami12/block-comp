import React from "react"
import { View,StyleSheet } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Appbar, Chip, Text } from "react-native-paper";
import SwaChip from "../../swa-components/Chip/swaChip";
import { MaterialIcons } from '@expo/vector-icons';
import SwaRadioButton from "../../swa-components/RadioButton/swaRadioButton";
import SwaListAccordian from "../../swa-components/List/swaListAccordian";
import SwaButton from "../../swa-components/Button/swaButton";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
function GoalBlock({theme}){
return(
    <View>
        <View style={styles.card}>
        <SwaAppBar
        backAction={true}
        elevated={true}
        style={styles.appBar}
        theme={theme}
        />
        </View>
        <Text style={styles.textgoal}>Fix Your Goal</Text>
        <View style={styles.chipcard}>
            <SwaChip
            style={styles.chip}
            textStyle={styles.text}
            closeIcon={"close"}
            onClose={() => {}}
            >
                Class XII & XI - CBSE |
            </SwaChip>
            <SwaChip
            style={styles.chip}
            textStyle={styles.text}
            closeIcon={"close"}
            onClose={() => {}}
            >
               JEE Mains & Adv. |
            </SwaChip>
            <SwaChip
            style={styles.chipneet}
            textStyle={styles.text}
            closeIcon={"close"}
            onClose={() => {}}
            >
                NEET |
            </SwaChip>
            <SwaChip
            style={styles.chip}
            textStyle={styles.text}
            closeIcon={"close"}
            onClose={() => {}}
            >
                GATE - Civil |
            </SwaChip>
        </View>
        <View style={styles.classlist}>
            <SwaListAccordian
            title="Class XII & XI"
            titleStyle={styles.title}
           style={styles.accor}
            >
                
            </SwaListAccordian>
            <View style={styles.radio}>
            <SwaRadioButton
        status={"checked"}
        color={"#175CCC"}
        />
            </View>
            <View style={styles.line}></View>
         
        </View>
        <View style={styles.classlist}>
            <SwaListAccordian
            title="SSC"
            titleStyle={styles.title}
           style={styles.accor}
            >
                
            </SwaListAccordian>
            <View style={styles.radio}>
            <SwaRadioButton
        status={"checked"}
        color={"#175CCC"}
        />
            </View>
            <View style={styles.line}></View>
         
        </View>
        <View style={styles.classlist}>
            <SwaListAccordian
            title="RRB"
            titleStyle={styles.title}
           style={styles.accor}
            >
                
            </SwaListAccordian>
            <View style={styles.radio}>
            <SwaRadioButton
        status={"checked"}
        color={"#175CCC"}
        />
            </View>
            <View style={styles.line}></View>
         
        </View>
        <View style={styles.classlist}>
            <SwaListAccordian
            title="GATE"
            titleStyle={styles.title}
           style={styles.accor}
            >
                
            </SwaListAccordian>
            <View style={styles.radio}>
            <SwaRadioButton
        status={"checked"}
        color={"#175CCC"}
        />
            </View>
            <View style={styles.line}></View>
         
        </View>
        <View style={styles.extraclass}>
        <SwaRadioButton
        status={"checked"}
        color={"#175CCC"}
        />
            <Text style={styles.neettext}>NEET</Text>
        </View>
        <View style={styles.line1}></View>
        <View>
        <View style={styles.extraclassjee}>
        <SwaRadioButton
        status={"checked"}
        color={"#175CCC"}
        />
            <Text style={styles.neettext}>JEE Mains & Adv.</Text>
        </View>
        <View style={styles.line2}></View>
        </View>
        <View style={styles.btn}>
        <SwaButton
        size="medium"
        borderRadius={10}
        >Continue</SwaButton>
        </View>
      <View style={styles.bottamnav}>
        <BottomNavigationBar/>
      </View>
    </View>
)
}
const styles = StyleSheet.create({
    card:{
        backgroundColor: "black", 
        shadowColor: "black",
        shadowOffset: {
          width: 3,
          height: 7,
        },
        shadowOpacity: 1,
        // shadowRadius:7,
        elevation: 11,
        bottom:5
    },
    textgoal:{
        fontSize:24,
        fontWeight:600,
        left:15,
        top:30
    },
    chip:{
        width:176,
        height:30,
        borderRadius:10,
        backgroundColor:"#008FFF"
    },
    chipneet:{
        width:90,
        height:30,
        borderRadius:10,
        backgroundColor:"#008FFF",
    },
    text:{
        fontSize:12,
        color:"white"
    },
    chipcard:{
        width:382,
        height:100,
        left:10,
        flexDirection:"row",
        flexWrap: 'wrap',
        top:50
    },
    title:{
        left:30,
        color:"black"
    },
    radio:{
        bottom:50
    },
    line: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.8,
        marginVertical: 10,
        width:"90%",
        left:10,
        bottom:40
      },
      line2:{
        borderBottomColor: 'grey',
        borderBottomWidth: 0.8,
        marginVertical: 10,
        width:"90%",
        left:10,
        top:160
      },
      line1:{
        borderBottomColor: 'grey',
        borderBottomWidth: 0.8,
        marginVertical: 10,
        width:"90%",
        left:10,
        top:90
      },
      accor:{
        backgroundColor:"white"
      },
      classlist:{
        top:50
      },
      extraclass:{
        flexDirection:"row",
        top:60
      },
      neettext:{
        fontSize:16,
        top:6,
        left:10
      },
      extraclassjee:{
        top:130,
        flexDirection:"row",
      },
      btn:{
        top:180,
        left:30
      },
      bottamnav:{
        top:180
      }
})
export default GoalBlock;