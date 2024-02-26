import React from "react";
import { List } from "react-native-paper";

const SwaListSection = ({ title, children, theme, titleStyle, style }) => {
  return (
    <List.Section title={title} theme={theme} titleStyle={titleStyle} style={style}>
      {children}
    </List.Section>
  );
};

export default SwaListSection;
