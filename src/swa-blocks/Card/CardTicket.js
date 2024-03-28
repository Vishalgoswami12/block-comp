import React from "react";
import { View, StyleSheet } from "react-native";
import SwaButton from "../../swa-components/Button/swaButton";
import { Text } from "react-native-paper";
import themeObject from "../../Constants/Globaltyle";

function CardTicket() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.buttonContainer}>
          <Text style={styles.title}>Ticket:Video Stream glitch</Text>
          <SwaButton 
            size="xxsmall"
            theme={themeObject}
            borderRadius={10}
            labelFontSize={11}
            labelColor="white"
          >
            Open
          </SwaButton>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>24 Jan 2024, 11:06AM</Text>
          <Text style={styles.text}>Ticket ID - 1234567</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  text: {
    color: "#727272",
    fontSize: 12,
  },
});

export default CardTicket;
