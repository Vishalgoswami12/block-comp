import React from "react";
import SwaCard from "../../swa-components/Card/swaCard";
import { View } from "react-native";
import SwaButton from "../../swa-components/Button/swaButton";
import SwaChip from "../../swa-components/Chip/swaChip";

function CardActionLiveStream() {
  return (
    <View>
      <View>
        <SwaCard
          title="Revision(JEE Mains Starter Course)"
          actions={
              <SwaButton onPress={() => {}} label="Join Now" />
          }
        />
      </View>
      <View>
        <SwaCard title="Revision(JEE Mains Starter Course)" />
        <SwaChip icon="bell" mode="outlined">
          Starts in 25 mins
        </SwaChip>
      </View>
    </View>
  );
}

export default CardActionLiveStream;
