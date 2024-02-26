import React from "react";
import SwaDialog from "../../swa-components/Dialog/SwaDialog";

function CardDialog() {
  return (
    <SwaDialog icon="check" title="Enter text overhere" visible={visible} onDismiss={hideDialog} />
  );
}

export default CardDialog;
