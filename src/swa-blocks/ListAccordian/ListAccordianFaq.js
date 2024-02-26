import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import SwaListAccordian from "../../swa-components/List/SwaListAccordian";

function ListAccordianFaq({ title, description }) {
  return (
    <View>
      <SwaListAccordian
        title={title}
        style={styles.accorBac}
        expanded={true}
        description={description}
      />
    </View>
  );
}

export default ListAccordianFaq;

const styles = StyleSheet.create({
  accorBac: {
    backgroundColor: "#B9DCFF",
    height: "auto"
  }
});
