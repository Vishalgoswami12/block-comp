import React from "react";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
function HeadHomeScreen() {
  return (
    <View>
      <Text variant="titleSmall">Headline</Text>
      <SwaAppBar
        backgroundColor="white"
        title="Home Screen(General and Personalized)"
        titleStyle={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center"
  }
});

export default HeadHomeScreen;
