import React from "react";
import SwaCard from "../../swa-components/Card/swaCard";
import SwaAvatar from "../../swa-components/Avatar/SwaAvatar";
import SwaBadge from "../../swa-components/Badge/SwaBadge";
import { View } from "react-native";
function CarNotification() {
  return (
    <View>
      <View>
        <SwaAvatar icon="exam" />
        <SwaCard
          title="New Exam Launched"
          subtitle="A new Practice test for Police is now available. Attempt it now and know and put your knowledge to best "
        />
        <SwaBadge />
      </View>
      <View>
        <SwaAvatar icon="video" />
        <SwaCard
          title="New Video Launched"
          subtitle="New Video Lessom aded to your course Explore now!"
        />
        <SwaBadge />
      </View>
      <View>
        <SwaAvatar icon="text" />
        <SwaCard
          title="New Test Launched"
          subtitle="New Video Lessom aded to your course Explore now!"
        />
        <SwaBadge />
      </View>
    </View>
  );
}

export default CarNotification;
