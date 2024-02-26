import React from "react";
import { ActivityIndicator } from "react-native-paper";

const SwaActivityIndicator = ({ animating, color, size, hidesWhenStopped, style, theme }) => {
  return (
    <ActivityIndicator
      animating={animating}
      color={color}
      size={size}
      hidesWhenStopped={hidesWhenStopped}
      style={style}
      theme={theme}
    />
  );
};

export default SwaActivityIndicator;
