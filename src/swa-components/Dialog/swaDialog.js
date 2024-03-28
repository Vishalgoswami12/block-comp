import React from "react";
import { Dialog, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons"; 
import { View } from "react-native";

const SwaDialog = ({
  visible,
  onDismiss,
  title,
  titleStyle,
  titleTheme,
  content,
  contentStyle,
  iconColor,
  iconName,
  backgroundColor,
  iconSize,
  actions,
  actionStyle,
  tickIndex,
  showHorizontalLines,
  borderRadius = 0
}) => {
  return (
    <Dialog visible={visible} onDismiss={onDismiss} style={{ backgroundColor, borderRadius }}>
      <Dialog.Title style={titleStyle} theme={titleTheme}>
        {title}
      </Dialog.Title>
      <Dialog.Content style={contentStyle}>
        {content && Array.isArray(content) && content.map((line, index) => (
          <React.Fragment key={index}>
            <Paragraph style={{ marginLeft: index === tickIndex ? 0 : 11.5 }}>
              {index === tickIndex && iconName && (
                <AntDesign
                  name={iconName}
                  size={iconSize}
                  color={iconColor}
                  style={{ marginRight: 8 }}
                />
              )}
              {line}
            </Paragraph>
            {showHorizontalLines && index !== content.length - 1 && (
              <View
                style={{
                  borderBottomWidth: 0.2,
                  borderBottomColor: "black",
                  marginHorizontal: -9,
                  marginTop: 10
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Dialog.Content>
      <Dialog.Actions style={actionStyle}>{actions}</Dialog.Actions>
    </Dialog>
  );
};

export default SwaDialog;
