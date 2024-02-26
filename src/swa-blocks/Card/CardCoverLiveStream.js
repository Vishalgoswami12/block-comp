import React from "react";
import SwaCard from "../../swa-components/Card/SwaCard";
import { View } from "react-native";
function CardCoverLiveStream() {
  return (
    <View>
      <SwaCard coverImage={{ uri: "https://example.com/cover.jpg" }} onPress={handlePress} />
    </View>
  );
}

export default CardCoverLiveStream;
