import React from "react";
import { Chip } from "react-native-paper";

const SwaChip = ({
  mode,
  children,
  icon,
  avatar,
  closeIcon,
  selected,
  selectedColor,
  showSelectedOverlay,
  showSelectedCheck,
  disabled,
  background,
  accessibilityLabel,
  onPress,
  elevated,
  textStyle,
  style,
  theme,
  testID,
  onClose,
}) => {
  return (
    <Chip
      mode={mode}
      icon={icon}
      avatar={avatar}
      closeIcon={closeIcon}
      selected={selected}
      selectedColor={selectedColor}
      showSelectedOverlay={showSelectedOverlay}
      showSelectedCheck={showSelectedCheck}
      disabled={disabled}
      background={background}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      elevated={elevated}
      textStyle={textStyle}
      style={style}
      theme={theme}
      testID={testID}
      onClose={onClose}
      >
      {children}
    </Chip>
  );
};

export default SwaChip;
