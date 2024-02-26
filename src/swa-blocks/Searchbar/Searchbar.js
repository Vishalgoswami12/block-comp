import React from "react";
import SwaSearchbar from "../../swa-components/Searchbar/SwaSearchbar";
import { View, StyleSheet } from "react-native";

function Searchbar() {
  return (
    <View>
      <SwaSearchbar style={styles.search} placeholder="Enter Video title here" />
    </View>
  );
}
const styles = StyleSheet.create({
  search: {
    backgroundColor: "white",
    width: 328,
    borderRadius: 5
  }
});
export default Searchbar;
