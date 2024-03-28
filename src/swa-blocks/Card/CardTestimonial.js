import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

function CardTestimonial() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Kathryn Murphy</Text>
          <Text style={styles.air}>Air 1(JEE)</Text>
        </View>
        <Text style={styles.longPara}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width:200,
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    padding: 10,
  },
  textContainer: {
    marginBottom: 5,
    marginLeft:30
  },
  name: {
    fontSize: 8.6,
    fontWeight: 500,
  },
  air: {
    fontSize: 7,
    color: "#6B7280",
    fontWeight: 400,
  },
  longPara: {
    fontSize: 8,
    color: "#000000",
    fontWeight: 400,
  },
});

export default CardTestimonial;
