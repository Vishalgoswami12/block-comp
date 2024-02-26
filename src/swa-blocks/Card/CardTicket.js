import React from "react";
import SwaCard from "../../swa-components/Card/swaCard";
import { View, StyleSheet } from "react-native";
import SwaButton from "../../swa-components/Button/swaButton";
import { Text } from "react-native-paper";

function CardTicket() {
  return (
    <View style={styles.container}>
      <SwaCard
        title="Ticket: Video Stream glitch"
        content="24 Jan 2024, 11:06AM"
        width={400}
        height={100}
        titleStyle={styles.customTitle}
        actions={
          <View style={styles.buttonContainer}>
            <SwaButton label="Open" size="small" mode="contained" backgroundColor="#329FFF" />
            <Text style={styles.text}>Ticket ID: 1234567</Text>
          </View>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    position: "relative"
  },
  customTitle: {
    fontSize: 18,
    color: "black",
    fontWeight: 700
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: -70
  },
  text: {
    position: "absolute",
    top: 44,
    width: "200%"
  }
});

export default CardTicket;
