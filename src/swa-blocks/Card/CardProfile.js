import React from "react";
import { View } from "react-native";
import SwaIcon from "../../swa-components/Icon/SwaIcon";
import { Text } from "react-native-paper";
function CardProfile() {
  return (
    <View>
      <View>
        <SwaIcon source="resource" />
        <Text>My Cources</Text>
      </View>
      <SwaIcon
        source="" //// right icon
      />
    </View>
  );
}

export default CardProfile;
