"use client";
import React, { useState } from "react";

interface InputTextFieldWithExpandableProps {
  label?: string;
  value?: string;
  //   onChange?: (value: string) => void;
}

const InputTextFieldWithExpandable: React.FC<
  InputTextFieldWithExpandableProps
> = ({ label, value }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        // onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={handleExpandClick}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      {isExpanded && <div>Expanded content</div>}
    </div>
  );
};

export default InputTextFieldWithExpandable;
