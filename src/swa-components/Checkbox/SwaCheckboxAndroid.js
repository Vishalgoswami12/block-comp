import React from "react";
import { Checkbox, TouchableRipple } from "react-native-paper";

const SwaCheckboxAndroid = ({
  status,
  disabled,
  onPress,
  color,
  theme,
  testID,
  uncheckedColor,
  style
}) => {
  return (
    <TouchableRipple onPress={onPress} disabled={disabled}>
      <Checkbox.Android
        status={status}
        disabled={disabled}
        uncheckedColor={uncheckedColor}
        color={color}
        theme={theme}
        testID={testID}
        style={style}
      />
    </TouchableRipple>
  );
};

export default SwaCheckboxAndroid;
