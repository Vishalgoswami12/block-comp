import React from "react";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
function HeadLine() {
  return (
    <View>
      <Text variant="titleSmall">Headline</Text>
      <SwaAppBar backgroundColor="white" title="Common" titleStyle={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center"
  }
});

export default HeadLine;
