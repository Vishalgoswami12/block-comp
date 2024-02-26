import React from "react";
import { Badge } from "react-native-paper";

const SwaBadge = ({ backgroundColor, size }) => {
  const badgeSize = size || 30;
  return (
    <Badge
      visible={true}
      size={badgeSize}
      style={{
        borderRadius: badgeSize / 2,
        backgroundColor: backgroundColor || "blue",
        justifyContent: "center",
        alignItems: "center"
      }}
    />
  );
};

export default SwaBadge;
