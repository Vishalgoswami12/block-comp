import React from "react";
import SwaSurface from "../../swa-components/Surface/SwaSurface";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

function SurfaceTime({ time }) {
  return (
    <View>
      <SwaSurface style={styles.surface} elevation={3}>
        <Text style={styles.surfaceText} vriant="titleMedium">
          {time}
        </Text>
      </SwaSurface>
    </View>
  );
}

const styles = StyleSheet.create({
  surface: {
    width: 75,
    height: 40,
    backgroundColor: "white"
  },
  surfaceText: {
    fontWeight: 700,
    textAlign: "center",
    padding: 8
  }
});
export default SurfaceTime;
