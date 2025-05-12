import { useState } from "react";

export const GlassSwitch = ({ name = "", checked = false, onChange }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex justify-end items-center mb-[-20px]">
      <label className="block text-sm font-medium mr-2 text-left" style={{color:checked?"green":"red",fontWeight:"700"}}>
        {checked ? "Active" : "De-active"}
      </label>

      <label class="toggle-switch">
        <input name={name} checked={checked} onChange={onChange} type="checkbox" />
        <span class="toggle-slider"></span>
      </label>
    </div>
  );
};
