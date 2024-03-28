import React from "react";
import { Chip } from "react-native-paper";

const SwaChip = ({ children, theme, style, ...props }) => {
  //mode,icon,avatar,closeIcon,selected,selectedColor,showSelectedCheck,disabled,onPress,elevated = ...props
  return (
    <Chip
      {...props}
      style={style}
      background={theme?.swaTheme?.PrimaryColor?.Primary100 || "#0D80F2"}
      style1={{
        backgroundColor: theme?.swaTheme?.PrimaryColor?.Primary100 || "#0D80F2",
      }}
      textStyle={{ color: theme?.swaTheme?.ConstColor?.Const0 || "#FFFFFF" }}
   
      >
      {children}
    </Chip>
  );
};

export default SwaChip;
