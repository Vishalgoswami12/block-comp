import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import SwaChip from "../../swa-components/Chip/swaChip";
import SwaListAccordian from "../../swa-components/List/swaListAccordian";
import SwaCard from "../../swa-components/Card/swaCard";
import { FontAwesome6,MaterialIcons } from '@expo/vector-icons';
import { Text } from "react-native-paper";
import CardClass from "../../swa-blocks/Card/CardClass";
function Downloads() {
  return (
    <View>
    
      <ScrollView horizontal={true} style={{ padding: 10,}}>
        <SwaChip style={styles.chip1}>
          Solving CBSE Boards 10 Years Question Bank
        </SwaChip>
        <SwaChip style={styles.chip2}>
          Solving IES 10 Years Question Bank
        </SwaChip>
      </ScrollView>
      <View style={{padding:10}}>
      <View style={styles.horizontalLine}></View>
      <SwaListAccordian
      style={styles.accor}
      title="Biology"
      titleStyle={styles.title}
      ></SwaListAccordian>
       <SwaListAccordian
      style={styles.accor}
      title="Mathematics"
      titleStyle={styles.title}
      >
         <View style={{paddingTop:10,}}>
      <CardClass/>
      </View>
      </SwaListAccordian>
      <SwaListAccordian
      style={styles.accor}
      title="Physics"
      titleStyle={styles.title}
      ></SwaListAccordian>
        <SwaListAccordian
      style={styles.accor}
      title="Chemistry"
      titleStyle={styles.title}
      ></SwaListAccordian>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chip1: {
    width: 184,
    backgroundColor: "#175CCC",
    borderRadius: 10,
    marginRight: 10,
  },
  chip2: {
    width: 184,
    backgroundColor: "#008FFF",
    borderRadius: 10,
    marginRight: 10,
  },
  horizontalLine: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  accor:{
    backgroundColor:"white"
  },
  title:{
    fontSize:16,
    fontWeight:600
  },
});

export default Downloads;
