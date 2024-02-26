import React from "react";
import { View, StyleSheet } from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
function AppbarHeaderContent() {
  return (
    <View>
      <SwaAppBar backgroundColor="white" title="All Test Series" titleStyle={styles.title}>
        <View>
          <Text variant="titleSmall" style={styles.headTitle}>
            See all <AntDesign name="right" size={16} color="#319FFF" />{" "}
          </Text>
        </View>
      </SwaAppBar>
    </View>
  );
}
const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    fontWeight: 700
  },
  headTitle: {
    color: "#319FFF",
    fontSize: 15
  }
});

export default AppbarHeaderContent;
