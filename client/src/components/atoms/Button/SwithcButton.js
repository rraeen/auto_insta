import React from "react";

function SwithcButton({botActive=false}) {
  return (
    <label class="toggle-switch">
      <input value={botActive} type="checkbox" />
      <span class="toggle-slider"></span>
    </label>
  );
}

export default SwithcButton;
