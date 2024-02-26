import React from "react";
import { Surface } from "react-native-paper";

const SwaSurface = ({ children, style, elevation, mode, theme, testID }) => {
  return (
    <Surface style={style} elevation={elevation} mode={mode} theme={theme} testID={testID}>
      {children}
    </Surface>
  );
};

export default SwaSurface;
