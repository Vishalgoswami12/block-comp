import React from "react";
import SwaCard from "../../swa-components/Card/SwaCard";
import SwaAvatar from "../../swa-components/Avatar/SwaAvatar";
import SwaChip from "../../swa-components/Chip/SwaChip";
import { Text } from "react-native-paper";
import SwaActivityIndicator from "../../swa-components/ActivityIndicator/SwaActivityIndicator";
import { View } from "react-native";

function CardClass() {
  return (
    <View>
      <View>
        <SwaAvatar icon="video" />
        <SwaCard title="Quiz autem vel eum iure reprehenderit qui in ea video heading" />
        <View>
          <SwaChip>MP Patwari C1 L2</SwaChip>
          <Text>| 20:13 min</Text>
        </View>
        <SwaActivityIndicator animating={true} color="blue" size="small" hidesWhenStopped={true} />
      </View>
      <View>
        <SwaAvatar icon="exam" />
        <SwaCard title="Quiz autem vel eum iure reprehenderit qui in ea video heading" />
        <View>
          <SwaChip>MP Patwari C1 L2</SwaChip>
          <Text>| 10 Pages</Text>
        </View>
        <SwaActivityIndicator animating={true} color="blue" size="small" hidesWhenStopped={true} />
      </View>
      <View>
        <SwaAvatar icon="text" />
        <SwaCard title="Quiz autem vel eum iure reprehenderit qui in ea video heading" />
        <View>
          <SwaChip>MP Patwari C1 L2</SwaChip>
          <Text>| 15 Qns | 20 min</Text>
        </View>
        <SwaActivityIndicator animating={true} color="blue" size="small" hidesWhenStopped={true} />
      </View>
    </View>
  );
}

export default CardClass;
