import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import CardTicket from "../../swa-blocks/Card/CardTicket";

function SwaProfileHelpTicketElement() {
  const [activeTab, setActiveTab] = useState(true); // State to manage active tab

  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "85%",
          paddingLeft: 40,
        }}
      >
        <TouchableOpacity onPress={() => setActiveTab(true)}>
          <Text
            variant="titleMedium"
            style={[
              styles.tabText,
              activeTab && styles.activeTabText,
            ]}
          >
            Open
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(false)}>
          <Text
            variant="titleMedium"
            style={[
              styles.tabText,
              !activeTab  && styles.activeTabText,
            ]}
          >
            Resolved
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 40 }}>
        {activeTab  ? (
          [1, 2].map((item, index) => (
            <View
              key={index}
              style={[styles.cardContainer, index > 0 && styles.secondCardMargin]}
            > 
            <CardTicket/>
            </View>
          ))
        ) : (
            <CardTicket/>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeTabText: {
    fontWeight: "bold",
    fontWeight: "normal",
    borderBottomWidth: 3,
    borderBottomColor:"#175CCC",
    width:100,
    paddingBottom: 2,
    marginBottom: -1,
  },
  secondCardMargin: {
    marginTop: 10,
  },
});

export default SwaProfileHelpTicketElement;
