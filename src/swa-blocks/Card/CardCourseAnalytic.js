import React from "react";
import { Card, Text, View } from "react-native-paper";
import SwaCard from "../../swa-components/Card/SwaCard";
import SwaBadge from "../../swa-components/Badge/SwaBadge";
import SwaIcon from "../../swa-components/Icon/SwaIcon";

function CardCourseAnalytic() {
  return (
    <Card>
      {/* First SwaCard */}
      <SwaCard
        title="Title 1"
        subtitle="Quis autem vel eum iure rephrehendrit qui in ea voluplate velit esse qunam nihil molestiae consequatu"
        titleVariant="titleMedium"
      />

      {/* Second SwaCard */}
      <SwaCard
        title="Solving Jee Past Year Question"
        titleVariant="titleSmall"
        content={
          <View>
            <SwaBadge />
            <SwaCard title="Video Lecture" titleVariant="titleSmall" />
          </View>
        }
      />

      {/* Third SwaCard */}
      <SwaCard
        content={
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SwaIcon source="duration" />
              <Card.Content>
                <Text variant="labelSmall">9:23 PM</Text>
                <Text>Started</Text>
              </Card.Content>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SwaIcon source="duration" />
              <Card.Content>
                <Text variant="labelSmall">10:54 PM</Text>
                <Text variant="titleSmall">Completed</Text>
              </Card.Content>
            </View>
          </View>
        }
      />

      {/* Fourth SwaCard */}
      <SwaCard
        content={
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ alignItems: "center" }}>
              <SwaIcon source="support" />
              <Text variant="titleMedium">0</Text>
              <Text variant="titleSmall">Breaks</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <SwaIcon source="analytic" />
              <Text variant="titleMedium">Peak Productivity</Text>
            </View>
          </View>
        }
      />
    </Card>
  );
}

export default CardCourseAnalytic;
