import React from "react";
import { TextInput } from "react-native-paper";

const SwaTextInput = ({ style, theme, borderRadius, ...props }) => {
   //icon,onPress,forceTextInputFocus,color,rippleColor,mode,label,disabled,autoFocus = props
  return (
    <TextInput
      {...props}
      style={[
        style,
        {
          borderRadius: borderRadius || 8, // default borderRadius is 8 if not provided
        },
      ]}
      color={theme?.swaTheme?.ConstColor?.Const0 || "white"}
      rippleColor={theme?.swaTheme?.ConstColor?.Const0 || "black"}
      theme={theme}
    />
  );
};

export default SwaTextInput;
