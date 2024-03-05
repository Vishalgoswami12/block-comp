// SwaSegmentedButton.js

import React from "react";
import { SegmentedButton, } from "react-native-paper";

const SwaSegmentedButton = ({ buttons={}, density, style, theme }) => {
  return (
    <SegmentedButton
      buttons={buttons}
      density={density}
      style={style}
    />
  );
};

export default SwaSegmentedButton;
