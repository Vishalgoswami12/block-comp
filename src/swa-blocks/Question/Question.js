import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Octicons, MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";

function Question() {
  const options = ["Option", "Option", "Option", "Option"];

  const renderOptions = () => {
    return options.map((option, index) => (
      <View key={index} style={styles.option}>
        <Text style={styles.optiontext}>{`${String.fromCharCode(97 + index)}) ${option}`}</Text>
      </View>
    ));
  };

  return (
    <View>
      <View style={styles.subconatiner}>
        <Text>QUESTION 1</Text>
        <View style={styles.iconContainer}>
          <Octicons name="bookmark" style={styles.icon} size={24} color="black" />
          <MaterialCommunityIcons name="flag-outline" size={24} color="black" />
        </View>
      </View>
      <Text style={styles.questext}>Lorem ipsum dolor sit amet consectetur adipiscing elit? </Text>
      {renderOptions()}
      <View style={styles.dlt}>
        <Text style={styles.dlttext}>
          Clear Option <AntDesign name="delete" size={15} color="#193DAD" />
        </Text>
        <Text style={styles.book}>
          Mark for review <Entypo name="star-outlined" size={16} color="#A43FDD" />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subconatiner: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconContainer: {
    flexDirection: "row",
    right:25
  },
  icon: {
    marginRight: 28
  },
  questext: {
    fontSize: 16,
    fontWeight: "700",
    width: 328,
    top: 20
  },
  option: {
    top: 40,
    width: 328,
    height: 40,
    borderWidth: 1,
    borderColor: "#329FFF",
    borderRadius: 10
  },
  optiontext: {
    top: 7,
    left: 8
  },
  dlt: {
    color: "#193DAD",
    top: 80,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  dlttext: {
    left: -35,
    color: "#193DAD"
  },
  book: {
    color: "#A43FDD",
    right: -17
  }
});

export default Question;
