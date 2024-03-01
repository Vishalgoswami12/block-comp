import React from "react";
import { Button } from "react-native-paper";

const SwaButton = ({
  onPress,
  labelFontSize,
  labelTopMargin,
  labelStyle,
  labelColor,
  margin,
  color,
  disabled,
  size,
  testID,
  mode,
  icon,
  backgroundColor,
  borderRadius,
  children // Using children prop instead of label
}) => {
  const sizes = {
    xsmall: { width: 140, height: 40 },
    small: { width: 145, height: 45 },
    xmedium: { width: 310, height: 40 },
    xxmedium: { width: 286, height: 40 },
    medium: { width: 328, height: 40 },
    large: { width: 363, height: 60 }
  };

  const { width, height } = sizes[size] || sizes.xsmall;
  const buttonMargin =
    typeof margin === "object"
      ? `${margin.top || 0}px ${margin.right || 0}px ${margin.bottom || 0}px ${margin.left || 0}px`
      : margin;
  return (
    <Button
      onPress={onPress}
      mode={mode}
      color={color}
      disabled={disabled}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor || "#329FFF",
        margin: buttonMargin,
        marginTop: labelTopMargin,
        borderRadius: borderRadius
      }}
      icon={icon}
      testID={testID}
      labelStyle={{ color: labelColor, fontSize: labelFontSize }}>
      {children} {/* Using children prop  insted of label*/}
    </Button>
  );
};

export default SwaButton;
