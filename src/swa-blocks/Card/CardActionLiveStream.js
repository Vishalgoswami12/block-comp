import React from "react";
import SwaCard from "../../swa-components/Card/SwaCard";
import { View } from "react-native";
import SwaButton from "../../swa-components/Button/SwaButton";
import SwaChip from "../../swa-components/Chip/SwaChip";

function CardActionLiveStream() {
  return (
    <View>
      <View>
        <SwaCard
          title="Revision(JEE Mains Starter Course)"
          actions={
            <Card.Actions>
              <SwaButton onPress={() => {}} label="Join Now" />
            </Card.Actions>
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
