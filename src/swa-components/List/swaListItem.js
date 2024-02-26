import React from "react";
import { List } from "react-native-paper";

const SwaListItem = ({
  title,
  description,
  left,
  right,
  onPress,
  theme,
  style,
  contentStyle,
  titleStyle,
  descriptionStyle
}) => {
  return (
    <List.Item
      title={title}
      description={description}
      left={left}
      right={right}
      onPress={onPress}
      theme={theme}
      style={style}
      contentStyle={contentStyle}
      titleStyle={titleStyle}
      descriptionStyle={descriptionStyle}
    />
  );
};

export default SwaListItem;
