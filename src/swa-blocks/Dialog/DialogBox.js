import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import SwaDialog from "../../swa-components/Dialog/SwaDialog";

function DialogBox() {
  return (
    <View style={styles.container}>
      <View style={styles.dialog}>
        <SwaDialog
          visible={dialogVisible}
          backgroundColor="white"
          title="Dialog Title"
          content="Enter text over here."
          iconName="checkcircleleo"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dialog: {
    width: 328, // Adjust width as needed
    height: 116,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 0
  }
});

export default DialogBox;
