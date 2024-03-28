import React from "react";
import { List } from "react-native-paper";

const SwaListAccordian = ({ children, theme, style, ...props }) => {
  //title,description,left,right,expanded,onPress,background, titleNumberOfLines,descriptionNumberOfLines,titleMaxFontSizeMultiplier,descriptionMaxFontSizeMultiplier,testID = ...props
  return (
    <List.Accordion
      {...props}
      theme={theme}
      style={style}>
      {children}
    </List.Accordion>
  );
};

export default SwaListAccordian;
