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
  size, //// xsmall,small etc
  testID,
  mode,
  icon,
  borderRadius,
  theme,
  borderColor,
  style,
  children, // Using children prop instead of label
  customWidth,
  customHeight // new props for custom width and height
}) => {
  const sizes = {
    xxsmall: { width: 60, height: 40 },
    xsmall: { width: 140, height: 40 },
    small: { width: 145, height: 45 },
    xmedium: { width: 310, height: 40 },
    xxmedium: { width: 286, height: 40 },
    medium: { width: 328, height: 40 },
    large: { width: 363, height: 60 }
  };

  const { width, height } = sizes[size] || sizes.xsmall;
  const buttonWidth = customWidth || width; // use custom width if provided, else use default width
  const buttonHeight = customHeight || height; // use custom height if provided, else use default height

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
      styles={style}
      style={{
        width: buttonWidth,
        height: buttonHeight,
        borderColor: borderColor|| "#008FFF" ,
        backgroundColor: mode !== "outlined" ? theme?.theme?.PrimaryColor?.Primary400  : theme?.theme?.ConstColor?.Const0,
        margin: buttonMargin,
        marginTop: labelTopMargin,
        borderRadius: borderRadius
      }}
      icon={icon}
      theme={theme}
      testID={testID}
      labelStyle={{
        color: mode !== "outlined" ? theme?.theme?.ConstColor?.Const0   :theme?.theme?.ConstColor?.const900,
        fontSize: labelFontSize
      }}>
      {children} {/* Using children prop instead of label*/}
    </Button>
  );
};

export default SwaButton;
