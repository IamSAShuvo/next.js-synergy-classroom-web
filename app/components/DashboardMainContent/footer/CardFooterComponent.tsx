// CardFooterComponent.tsx

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PrimaryButton from "../../Buttons/PrimaryButton";
import NumberBadge from "../../typography/NumberBadge";
// import { classroomData } from "@/app/constants/constantData";

interface CardFooterProps {
  isEnrolled: boolean;
  onEnroll: () => void;
  studentCount: number;
}

const CardFooterComponent: React.FC<CardFooterProps> = ({
  isEnrolled,
  onEnroll,
  studentCount,
}) => (
  <div className="border-t-2 px-5 py-2 text-center flex items-center justify-between">
    {!isEnrolled ? (
      <PrimaryButton
        onClick={onEnroll}
        text="Enroll"
        className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
        disabled={isEnrolled}
      />
    ) : (
      <CheckCircleIcon className="text-green-500" fontSize="large" />
    )}
    <NumberBadge count={studentCount} />
  </div>
);

export default CardFooterComponent;
