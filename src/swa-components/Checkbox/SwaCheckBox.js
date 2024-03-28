import React from "react";
import { Platform } from "react-native";
import { Checkbox, TouchableRipple } from "react-native-paper";

const SwaCheckbox = ({ status, disabled, onPress, color, theme, testID, uncheckedColor, size }) => {
  const isAndroid = Platform.OS === "android";

  const checkboxSize = size || 5; 

  if (isAndroid) {
    return (
      <TouchableRipple onPress={onPress} disabled={disabled}>
        <Checkbox.Android
          status={status}
          disabled={disabled}
          uncheckedColor={uncheckedColor}
          color={color}
          testID={testID}
          style={{ width: checkboxSize, height: checkboxSize }}
        />
      </TouchableRipple>
    );
  } else {
    return (
      <Checkbox.IOS
        status={status}
        disabled={disabled}
        onPress={onPress}
        color={theme?.color}
        theme={theme}
        testID={testID}
        style={{ width: checkboxSize, height: checkboxSize }}
      />
    );
  }
};

export default SwaCheckbox;
