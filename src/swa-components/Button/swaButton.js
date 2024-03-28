import React from "react";
import { Button } from "react-native-paper";

const SwaButton = ({
  onPress,
  labelFontSize,
  labelTopMargin,
  margin,
  color,
  disabled,
  size,
  testID,
  mode,
  icon,
  borderRadius,
  theme,
  borderColor,
  children,
  customWidth,
  customHeight,
  backgroundColor

}) => {
  const sizes = {
    xxsmall: { width: 60, height: 40 },
    xsmall: { width: 140, height: 40 },
    small: { width: 145, height: 45 },
    xmedium: { width: 310, height: 40 },
    xxmedium: { width: 286, height: 40 },
    medium: { width: 328, height: 40 },
    large: { width: 353, height: 45 }
  };

  const { width, height } = sizes[size] || sizes.xsmall;
  const buttonWidth = customWidth || width;
  const buttonHeight = customHeight || height;

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
        width: buttonWidth,
        height: buttonHeight,
        borderColor: borderColor || "#008FFF",
        backgroundColor:  (mode !== "outlined" ? `${theme?.theme?.PrimaryColor?.Primary500}` : theme?.theme?.ConstColor?.Const0),
        margin: buttonMargin,
        marginTop: labelTopMargin,
        borderRadius: borderRadius
      }}
      icon={icon}
      theme={theme}
      testID={testID}
      labelStyle={{
        color: mode !== "outlined" ? theme?.theme?.ConstColor?.Const0 : theme?.theme?.ConstColor?.const900,
        fontSize: labelFontSize
      }}
    >
      {children}
    </Button>
  );
};

export default SwaButton;
