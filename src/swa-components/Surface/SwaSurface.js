import React from "react";
import { Surface } from "react-native-paper";

const SwaSurface = ({ children, style, theme, ...props }) => {
  //elevation, mode,  testID = ...props
  return (
    <Surface style={style} theme={theme} {...props}>
      {children}
    </Surface>
  );
};

export default SwaSurface;
