import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import SwaTextInput from "../../swa-components/TextInput/swaTextInputIcon";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";

function SwaProfileUpdatePinElement() {
  const [showVerifyPin, setShowVerifyPin] = useState(false);

  const handleUpdateButtonClick = () => {
    setShowVerifyPin(true);
  };

  return (
    <View style={{ alignSelf: "center", marginTop: 20 }}>
      {!showVerifyPin && (
        <>
          <View>
            <Text
              variant="titleLarge"
              style={{ textAlign: "center", color: "#4B4B4B" }}
            >
              Enter new Pin number
            </Text>
            <View style={[styles.inputContainer, {}]}>
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
          <View style={{ marginTop: 60 }}>
            <Text
              variant="titleLarge"
              style={{ textAlign: "center", color: "#4B4B4B" }}
            >
              Confirm new Pin number
            </Text>
            <View style={[styles.inputContainer, {}]}>
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
          <Text
            style={{ color: "#329FFF", textAlign: "center", marginTop: 40 }}
            variant="bodySmall"
          >
            Remember to use your new PIN for your next login.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 50,
              marginTop: 40,
            }}
          >
            <SwaButton
              mode="outlined"
              theme={themeObject}
              borderRadius={10}
            >
              Clear
            </SwaButton>
            <SwaButton
              mode="contained"
              theme={themeObject}
              borderRadius={10}
              onPress={handleUpdateButtonClick}
            >
              Update
            </SwaButton>
          </View>
        </>
      )}

      {showVerifyPin && (
        <>
          <Text
            style={{ textAlign: "center", color: "#4B4B4B" }}
            variant="titleLarge"
          >
            Verify Existing Pin
          </Text>
          <View style={[styles.inputContainer, {}]}>
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
          <View style={{ alignSelf: "center", marginTop: 30 }}>
            <SwaButton mode="contained" theme={themeObject} borderRadius={10}>
              Verify
            </SwaButton>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: 248,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  input: {
    width: 56,
    backgroundColor: "white",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#5AB0FF",
  },
});

export default SwaProfileUpdatePinElement;
