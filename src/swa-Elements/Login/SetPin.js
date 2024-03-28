import React from "react";
import { View, StyleSheet } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import SwaTextInput from "../../swa-components/TextInput/swaTextInputIcon";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";

function SetPin() {
  const renderInputFields = (title, top, left) => (
    <View>
      <Text style={[styles.title, { top, alignSelf: "center" }]}>
        {title}
      </Text>
      <View style={[styles.inputContainer, { top, left }]}>
        {[...Array(4)].map((_, index) => (
          <SwaTextInput
            key={index}
            mode="contained"
            style={styles.input}
            keyboardType="numeric"
            textContentType="telephoneNumber"
          />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {renderInputFields("Enter New Pin", 30, 60)}
        {renderInputFields("Confirm New Pin", 100, 60)}
        <View style={styles.btn}>
          <SwaButton
            mode="contained"
            theme={themeObject}
            size="xmedium"
            borderRadius={10}
          >
            Set Pin
          </SwaButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#F3F3F3",
  },
  input: {
    width: 56,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#5AB0FF",
    marginTop:20
  },
  inputContainer: {
    flexDirection: "row",
    width: 248,
    justifyContent: "space-between",

  },
  contentContainer: {
    padding: 10,
    backgroundColor: "#F3F3F3",
  },
  btn: {
    marginTop: 470,
    marginLeft: 30,
  },
});

export default SetPin;
