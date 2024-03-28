import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import SwaTextInput from "../../swa-components/TextInput/swaTextInputIcon";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";

function VerifyOtp() {
  const [focusedInput, setFocusedInput] = useState(null);

  const handleInputFocus = (index) => {
    setFocusedInput(index);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcon}>
        <Text style={styles.text} variant="bodyMedium">
          Please enter the verification code we’ve sent you
        </Text>
        <View style={styles.inputcon}>
          {[...Array(4)].map((_, index) => (
            <SwaTextInput
              key={index}
              mode={focusedInput === index ? "outlined" : "contained"}
              style={[
                styles.input,
              ]}
              onFocus={() => handleInputFocus(index)}
              onBlur={handleInputBlur}
              keyboardType="numeric"
              placeholder="0"
              textContentType="telephoneNumber"
            />
          ))}
        </View>
        <View style={styles.btncon}>
          <SwaButton mode="outlined" borderRadius={10}>
            Resend OTP
          </SwaButton>
          <SwaButton mode="contained" theme={themeObject} borderRadius={10}>
            Verify OTP
          </SwaButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BBBBBB",
    height:800
  },

  text: {
    alignSelf: "center",
    marginTop: 190,
  },
  input: {
    width: 50,
    backgroundColor: "#BBBBBB",
    borderBottomWidth: 1,
    borderBottomColor:"#5AB0FF"
  },
  inputcon: {
    flexDirection: "row",
    width: 248,
    justifyContent: "space-between",
    marginLeft: 70,
    marginTop: 40,
  },
  btncon: {
    flexDirection: "row",
    width: 328,
    justifyContent: "space-between",
    marginLeft: 30,
    marginTop: 80,
  },
});

export default VerifyOtp;
