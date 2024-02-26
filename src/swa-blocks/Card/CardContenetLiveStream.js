import React from "react";
import SwaCard from "../../swa-components/Card/SwaCard";
import Text from "react-native-paper";
import SwaChip from "../../swa-components/Chip/SwaChip";
import { View } from "react-native";
function CardContentLiveStream() {
  return (
    <View>
      <SwaCard
        content={
          <Card.Content>
            <Text variant="titleMedium">Solving CBSE Boards 10 Year Question Bank </Text>
            <Text variant="titleSmall">by Manish S Pandey, Giridhar J, Shiva Prakash K </Text>
          </Card.Content>
        }
      />
      <SwaCard
        content={
          <View>
            <Card.Content>
              <Text>Revision(JEE Mains Starter Course)</Text>
            </Card.Content>
            <SwaChip icon="bell" mode="outlined">
              Starts in 25 mins
            </SwaChip>
          </View>
        }
      />
    </View>
  );
}

export default CardContentLiveStream;
