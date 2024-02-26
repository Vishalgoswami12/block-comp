import React from "react";
import { List } from "react-native-paper";

const SwaListAccordian = ({
  title,
  description,
  left,
  right,
  children,
  expanded,
  onPress,
  theme,
  background,
  style,
  titleStyle,
  descriptionStyle,
  titleNumberOfLines,
  descriptionNumberOfLines,
  titleMaxFontSizeMultiplier,
  descriptionMaxFontSizeMultiplier,
  testID
}) => {
  return (
    <List.Accordion
      title={title}
      description={description}
      left={left}
      right={right}
      expanded={expanded}
      onPress={onPress}
      theme={theme}
      background={background}
      style={style}
      titleStyle={titleStyle}
      descriptionStyle={descriptionStyle}
      titleNumberOfLines={titleNumberOfLines}
      descriptionNumberOfLines={descriptionNumberOfLines}
      titleMaxFontSizeMultiplier={titleMaxFontSizeMultiplier}
      descriptionMaxFontSizeMultiplier={descriptionMaxFontSizeMultiplier}
      testID={testID}>
      {children}
    </List.Accordion>
  );
};

export default SwaListAccordian;
