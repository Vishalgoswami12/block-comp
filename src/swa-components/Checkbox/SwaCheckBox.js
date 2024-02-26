import React from "react";
import { Checkbox } from "react-native-paper";

const SwaCheckbox = ({ status, disabled, onPress, color, theme, testID }) => {
  return (
    <Checkbox.IOS
      status={status}
      disabled={disabled}
      onPress={onPress}
      color={color}
      theme={theme}
      testID={testID}
    />
  );
};

export default SwaCheckbox;
