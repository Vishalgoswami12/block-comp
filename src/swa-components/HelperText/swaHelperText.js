import React from "react";
import { HelperText } from "react-native-paper";

const SwaHelperText = ({ type, children, visible, padding, disabled, style, theme, testID }) => {
  return (
    <HelperText
      type={type}
      visible={visible}
      padding={padding}
      disabled={disabled}
      style={style}
      theme={theme}
      testID={testID}>
      {children}
    </HelperText>
  );
};

export default SwaHelperText;
