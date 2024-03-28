import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";

const SwaCard = ({
  title,
  actions,
  testID,
  leftIcon,
  content,
  titleNumberOfLines,
  titleVariant,
  subtitle,
  onPress,
  coverImage,
  style = {},
  children,
  theme,
  backgroundColor,
  titleStyle,
}) => {
  return (
    <Card
      style={{
        width: style?.width,
        height: style?.height,
        backgroundColor: backgroundColor || theme?.swaTheme?.PrimaryColor?.Primary50 || "#E2F1FF",
        padding: 0, 
        margin: 0, 
        borderRadius: style?.borderRadius
      }}>
      {coverImage && (
        <Card.Cover
          source={coverImage}
          style={style?.coverImageStyle}
          theme={theme?.swaTheme?.PrimaryColor?.Primary100 || "#0D80F2"}
          testId={testID}
          onPress={onPress}
        />
      )}
      <Card.Title
        title={title}
        titleStyle={[style?.titleStyle, titleStyle]}
        titleNumberOfLines={titleNumberOfLines}
        titleVariant={titleVariant}
        subtitle={subtitle}
        subtitleStyle={style?.subtitleStyle}
        testId={testID}
        leftIcon={leftIcon}
        onPress={onPress}
        style={style}
      />
      <Card.Content style={style?.contentStyle} onPress={onPress} testId={testID}>
        <Text>{content}</Text>
      </Card.Content>
      {actions && (
        <Card.Actions style={style?.actionStyle} testId={testID}>
          <View>{actions}</View>
        </Card.Actions>
      )}
      {children}
    </Card>
  );
};

export default SwaCard;
