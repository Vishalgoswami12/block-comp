import React from "react";
import SwaCard from "../../swa-components/Card/swaCard";
import { View, StyleSheet } from "react-native";
import SwaButton from "../../swa-components/Button/swaButton";
import { Text } from "react-native-paper";

function CardTicket() {
  return (
    <View style={styles.container}>
     <SwaCard width={328}
     height={76}
     borderRadius={10}
     title="Ticket : Video Stream glitch"
     titleStyle={styles.title}
     >
      <View style={styles.buttonContainer}>
      <SwaButton 
        // backgroundColor="red"
        size="xxsmall"
        borderRadius={10}
        labelFontSize={11}
        labelColor="white"
        >Open</SwaButton>
      </View>
     <View style={styles.textcon}>
      <Text style={styles.text}>24 Jan 2024, 11:06AM</Text>
      <Text style={styles.text}>Ticket ID - 1234567</Text>
     </View>
     </SwaCard>
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    position: "relative"
  },
  buttonContainer: {
   position:"absolute",
   right:2
  },
  text: {
    color:"#727272",
    fontSize:12
  },
  textcon:{
    flexDirection:"row",
    justifyContent:"space-between",
    bottom:25
  },
  title:{
    left:-15
  }
});

export default CardTicket;
