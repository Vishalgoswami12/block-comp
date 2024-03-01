import React from "react";
import { Avatar } from "react-native-paper";

const SwaAvatar = ({ onPress, source, icon, size, color, style, theme, onload, testId }) => {
  if (source) {
    return (
      <Avatar.Image
        onPress={onPress}
        source={source}
        size={size || 50}
        style={style}
        onload={onload}
        testId={testId}
      />
    );
  } else if (icon) {
    return (
      <Avatar.Icon
        onPress={onPress}
        icon={icon}
        size={size || 50}
        color={color}
        style={style}
        testId={testId}
      />
    );
  } else if (text) {
    return (
      <Avatar.Text
        onPress={onPress}
        label={label || text}
        size={size || 50}
        color={color || theme.colors.primary}
        style={style}
        testId={testId}
      />
    );
  } else {
    return null;
  }
};

export default SwaAvatar;
