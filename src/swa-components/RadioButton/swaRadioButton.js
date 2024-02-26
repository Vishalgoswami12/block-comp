import React from "react";
import { RadioButton } from "react-native-paper";

const SwaRadioButton = ({
  value,
  status,
  disabled,
  onPress,
  uncheckedColor,
  color,
  theme,
  testID
}) => {
  return (
    <RadioButton.Android
      value={value}
      status={status}
      disabled={disabled}
      onPress={onPress}
      uncheckedColor={uncheckedColor}
      color={color}
      theme={theme}
      testID={testID}
    />
  );
};

export default SwaRadioButton;
