"use client";

import React, { FC, useState } from "react";

interface Option {
  value: string;
  label: string;
}

const RadioButtons: FC = () => {
  const options: Option[] = [
    { value: "student", label: "Student" },
    { value: "teacher", label: "Teacher" },
  ];

  const [profession, setProfession] = useState<string>("student");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfession(e.target.value);
  };

  return (
    <>
      <label className="font-normal text-base leading-6 text-primaryColor">
        Select Profession
      </label>
      <div className="flex items-center gap-12  mt-6">
        {options.map((option) => (
          <div
            key={option.value}
            className="flex items-center text-primaryColor"
          >
            <input
              type="radio"
              id={option.value}
              name="profession"
              value={option.value}
              onChange={handleChange}
              checked={profession === option.value}
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
