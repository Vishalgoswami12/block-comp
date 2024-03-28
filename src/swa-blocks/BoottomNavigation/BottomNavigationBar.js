import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather, Foundation, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native-paper";

const BottomNavigationBar = ({ backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor || "white" }]}>
      <View>
        <Feather name="home" size={24} color="black" />
        <Text variant="titleSmall" style={styles.text}>
          Home
        </Text>
      </View>
      <View>
        <Foundation name="play-video" size={24} color="black" />
        <Text variant="titleSmall" style={styles.text}>
          Videos
        </Text>
      </View>
      <View>
        <AntDesign name="questioncircleo" size={24} color="black" />
        <Text variant="titleSmall" style={styles.text}>
          Tests
        </Text>
      </View>
      <View>
        <FontAwesome5 name="user" size={24} color="black" />
        <Text variant="titleSmall" style={styles.text}>
          Profile
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 10,
    width: 360,
    height: 100,
    justifyContent: "space-between",
    padding: 20,
    left: 20
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    marginLeft: -6
  }
});

export default BottomNavigationBar;
