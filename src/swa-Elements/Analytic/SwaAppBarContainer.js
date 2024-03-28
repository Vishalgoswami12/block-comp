import { View, Text } from "react-native";
import React from "react";
import { SwaAppbar } from "@adhyayan-app/swa-components";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";

const SwaAppbarContainerBlock = ({
  children,
  appBarChildren,
  bottomChildren,
  upperChildren,
  ScrollAreaActive = true,
  theme,
  style,
  backAction = {},
  HeadLine = null,
  refreshing = false,
  onRefresh = () => {},
  isAppbarActive = true,
  ...props
}) => {
  return (
    <View style={{ backgroundColor: theme?.swaTheme?.ConstColor?.Const0 || "white", flex: 1 }}>
      {isAppbarActive && (
        <SwaAppbar
          theme={theme}
          style={style}
          backAction={backAction}
          HeadLine={HeadLine}
          {...props}>
          {appBarChildren}
        </SwaAppbar>
      )}
      <View style={style?.upperChildStyle}>{upperChildren}</View>
      {ScrollAreaActive && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
          <View style={{ flex: 1, padding: 10, ...style?.container }}>{children}</View>
        </ScrollView>
      )}
      <View style={style?.bottomChildren}>{bottomChildren}</View>
    </View>
  );
};

export default SwaAppbarContainerBlock;
