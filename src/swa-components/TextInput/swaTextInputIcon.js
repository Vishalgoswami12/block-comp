import React from "react";
import { TextInput } from "react-native-paper";

const SwaTextInputIcon = ({
  icon,
  onPress,
  forceTextInputFocus,
  color,
  rippleColor,
  style,
  theme
}) => {
  return (
    <TextInput.Icon
      icon={icon}
      onPress={onPress}
      forceTextInputFocus={forceTextInputFocus}
      color={color}
      rippleColor={rippleColor}
      style={style}
      theme={theme}
    />
  );
};

export default SwaTextInputIcon;
