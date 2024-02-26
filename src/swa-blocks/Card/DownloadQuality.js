import React from "react";
import SwaDialog from "../../swa-components/Dialog/SwaDialog";
import { Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

function DownLoadQuality() {
  const contentLines1 = ["240 px", "360 px", "480 px", "720 px", "1080 px", "2060 px"];

  return (
    <View style={styles.container}>
      <SwaDialog
        visible={true}
        backgroundColor="white"
        title="Streaming Quality"
        content={contentLines1}
        style={styles.dialog}
        tickIndex={3}
        iconName="check"
        contentStyle={styles.content}
        showHorizontalLines={true}
      />
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
    borderRadius: 10
  },
  content: {
    marginLeft: 20,
    marginTop: 16
  }
});

export default DownLoadQuality;
