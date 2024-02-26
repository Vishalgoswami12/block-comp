import * as React from "react";
import { Icon } from "react-native-paper";

const SwaIcon = ({ size, allowFontScaling, source, color, testID, theme }) => {
  return (
    <Icon
      size={size}
      allowFontScaling={allowFontScaling}
      source={source}
      color={color}
      testID={testID}
      theme={theme}
    />
  );
};

export default SwaIcon;
