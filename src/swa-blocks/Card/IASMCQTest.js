import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
// import {SwaButton} from "@adhyayan-app/swa-components";;
import BlockStyle from "../../Constants/BlockStyle";
import SwaButton from "../../swa-components/Button/swaButton";
function IASMCQTest({ theme }) {
  return (
    <View style={styles.container}>
      <View style={{ borderRadius: 10, backgroundColor: "#E2F1FF", padding: 10 }}>
        <Text style={styles.title}>IAS MCQ Test</Text>
        <Text style={styles.ser}>Series</Text>
        <View style={styles.resize}>
          <Foundation name="clipboard-notes" size={15} color="grey" />
          <Text style={styles.text}>15+ Test</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.iconText}>
          <Foundation name="clipboard-notes" size={15} color="grey" />
          <Text style={styles.ques}>1500+ Questions</Text>
        </View>
        <View style={styles.btn}>
          <SwaButton
            size="xsmall"
            borderRadius={10}
            mode="contained"
            theme={theme}
            labelFontSize={16}>
            Go To Tests
          </SwaButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create(BlockStyle.CARD.IAS_MCQ_TEST);
export default IASMCQTest;
