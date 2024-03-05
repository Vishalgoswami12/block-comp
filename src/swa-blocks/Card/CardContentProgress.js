import React from "react";
import { Card, Text, MD3Colors } from "react-native-paper";
import SwaCard from "../../swa-components/Card/swaCard";
import SwaProgressbar from "../../swa-components/Progressbar/SwaProgressbar";
import SwaButton from "../../swa-components/Button/swaButton";
import { View } from "react-native";
function CardContentProgress({handlePress=() =>{}}) {
  const percentage = 40;
  return (
    <Card>
      <SwaCard title="NEET crash course" />
      <SwaProgressbar progress={0.5} color={MD3Colors.blue} />
      <Text>{percentage} completed</Text>
      <SwaButton 
      onPress={handlePress}
       mode="contained" label="Continue" />
    </Card>
  );
}

export default CardContentProgress;
