import React from "react";
import { Searchbar } from "react-native-paper";

const SwaSearchbar = ({
  placeholder,
  value,
  onChangeText,
  mode,
  icon,
  iconColor,
  elevation,
  inputStyle,
  style
}) => {
  return (
    <Searchbar
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      mode={mode}
      icon={icon}
      iconColor={iconColor}
      style={style}
      inputStyle={inputStyle}
      elevation={elevation}
    />
  );
};

export default SwaSearchbar;
