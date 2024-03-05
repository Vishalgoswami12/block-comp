import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";

const SwaAppBar = ({
  dark = false,
  statusBarHeight = 0,
  children,
  mode,
  title,
  titleStyle, // Remove titleStyle from here
  subtitle,
  subtitleStyle,
  elevated = true,
  theme,
  style,
  testID,
  backAction,
  backActionColor,
  backActionSize,
  backActionAccessibilityLabel,
  onPress,
  HeadLine = null
}) => {
  return (
    <>
      {HeadLine ? <Text>{HeadLine}</Text> : null}

      <Appbar.Header
        statusBarHeight={statusBarHeight}
        dark={dark}
        style={[{ backgroundColor: theme?.theme?.ConstColor?.Const0 || "white" }, style]}
        mode={mode}
        testID={testID}
        elevation={elevated ? 4 : 0}>
        {backAction ? (
          <Appbar.BackAction
            color={backActionColor}
            size={backActionSize}
            accessibilityLabel={backActionAccessibilityLabel}
            onPress={onPress}
            testID={testID}
            style={style}
          />
        ) : null}

        <Appbar.Content
          title={title}
          titleStyle={titleStyle} // Pass titleStyle here
          subtitle={subtitle}
          subtitleStyle={subtitleStyle}
          onPress={onPress}
          theme={theme}
          testID={testID}
        />

        {children}
      </Appbar.Header>
    </>
  );
};

export default SwaAppBar;
