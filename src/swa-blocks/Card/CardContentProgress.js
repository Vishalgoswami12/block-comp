import React from "react";
import { Card, Text, MD3Colors } from "react-native-paper";
import SwaCard from "../../swa-components/Card/SwaCard";
import SwaProgressbar from "../../swa-components/Progressbar/SwaProgressbar";
import SwaButton from "../../swa-components/Button/SwaButton";
import { View } from "react-native";
function CardContentProgress() {
  const percentage = Math.round(progress * 100);
  return (
    <Card>
      <SwaCard title="NEET crash course" />
      <SwaProgressbar progress={0.5} color={MD3Colors.blue} />
      <Text>{percentage} completed</Text>
      <SwaButton onPress={handlePrss} mode="contained" label="Continue" />
    </Card>
  );
}

export default CardContentProgress;
