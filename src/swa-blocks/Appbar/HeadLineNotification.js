import React from "react";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
function HeadLineNotification() {
  return (
    <View>
      <Text variant="titleSmall">Headline</Text>
      <SwaAppBar backgroundColor="white" title="Notifiction" titleStyle={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center"
  }
});

export default HeadLineNotification;
