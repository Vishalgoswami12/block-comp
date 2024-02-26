import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";

const SwaCard = ({
  title,
  titleStyle,
  actions,
  actionStyle,
  testId,
  leftIcon,
  content, // Add content to destructuring assignment
  contentStyle,
  titleNumberOfLines,
  titleVariant,
  subtitle,
  subtitleStyle,
  onPress,
  coverImage,
  coverImageTheme,
  coverImageStyle,
  style,
  width,
  height,
  backgroundColor,
  padding,
  borderRadius,
  children
}) => {
  return (
    <Card
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor || "white",
        padding: padding || 10,
        borderRadius: borderRadius
      }}>
      {coverImage && (
        <Card.Cover
          source={coverImage}
          style={coverImageStyle}
          theme={coverImageTheme}
          testId={testId}
          onPress={onPress}
        />
      )}
      <Card.Title
        title={title}
        titleStyle={titleStyle}
        titleNumberOfLines={titleNumberOfLines}
        titleVariant={titleVariant}
        subtitle={subtitle}
        subtitleStyle={subtitleStyle}
        testId={testId}
        leftIcon={leftIcon}
        onPress={onPress}
        style={style}
      />
      <Card.Content style={contentStyle} onPress={onPress} testId={testId}>
        <Text>{content}</Text>
      </Card.Content>
      {actions && (
        <Card.Actions style={actionStyle} testId={testId}>
          <View>{actions}</View>
        </Card.Actions>
      )}
      {children}
    </Card>
  );
};

export default SwaCard;
