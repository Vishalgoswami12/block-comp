import React from "react";
import { BottomNavigation } from "react-native-paper";

const SwaBottomNavigationBar = ({
  shifting,
  labeled,
  compact,
  navigationState,
  renderIcon,
  renderLabel,
  renderTouchable,
  getAccessibilityLabel,
  getBadge,
  getColor,
  getLabelText,
  getTestID,
  onTabPress,
  onTabLongPress,
  activeColor,
  inactiveColor,
  animationEasing,
  keyboardHidesNavigationBar,
  safeAreaInsets,
  labelMaxFontSizeMultiplier,
  style,
  activeIndicatorStyle,
  theme,
  testID
}) => {
  return (
    <BottomNavigation.Bar
      shifting={shifting}
      labeled={labeled}
      compact={compact}
      navigationState={navigationState}
      renderIcon={renderIcon}
      renderLabel={renderLabel}
      renderTouchable={renderTouchable}
      getAccessibilityLabel={getAccessibilityLabel}
      getBadge={getBadge}
      getColor={getColor}
      getLabelText={getLabelText}
      getTestID={getTestID}
      onTabPress={onTabPress}
      onTabLongPress={onTabLongPress}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      animationEasing={animationEasing}
      keyboardHidesNavigationBar={keyboardHidesNavigationBar}
      safeAreaInsets={safeAreaInsets}
      labelMaxFontSizeMultiplier={labelMaxFontSizeMultiplier}
      style={style}
      activeIndicatorStyle={activeIndicatorStyle}
      theme={theme}
      testID={testID}
    />
  );
};

export default SwaBottomNavigationBar;
