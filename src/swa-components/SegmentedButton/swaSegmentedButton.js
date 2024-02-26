import React from "react";
import { SegmentedButton } from "react-native-paper";

const SwaSegmentedButton = ({ buttons, density, style, theme }) => {
  return <SegmentedButton buttons={buttons} density={density} style={style} theme={theme} />;
};

export default SwaSegmentedButton;
