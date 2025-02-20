"use client";

import React, { FC } from "react";
import PROFESSION_OPTIONS from "@/app/constants/professionOptions";

interface RadioButtonsProps {
  selectedRole: string;
  onRoleChange: (value: "student" | "teacher") => void;
}

const RadioButtons: FC<RadioButtonsProps> = ({
  selectedRole,
  onRoleChange,
}) => {
  return (
    <>
      <label className="font-normal text-base leading-6 text-primaryColor">
        Select Profession
      </label>
      <div className="flex items-center gap-12 mt-6">
        {PROFESSION_OPTIONS.map((option) => (
          <div
            key={option.value}
            className="flex items-center text-primaryColor"
          >
            <input
              type="radio"
              id={option.value}
              name="profession"
              value={option.value}
              onChange={() => onRoleChange(option.value)}
              checked={selectedRole === option.value}
              className="h-4 w-4"
            />
            <label htmlFor={option.value} className="ml-2 text-sm">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioButtons;
