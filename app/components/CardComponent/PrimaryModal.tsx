import React, { FC } from "react";
import UserProfile from "../UserProfile/UserProfile";

interface ProfileModalProps {
  name: string;
  avatarSrc: string;
  roles: string[];
  onClose: () => void;
}

const ProfileModal: FC<ProfileModalProps> = ({
  roles,
  name,
  onClose,
  avatarSrc,
}) => {
  return (
    <div
      className="fixed inset-0 bg-[#D9D9D9] bg-opacity-50 z-50 flex justify-end items-start"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 mt-4 mr-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <UserProfile role={roles[0]} avatarSrc={avatarSrc} name={name} />
      </div>
    </div>
  );
};

export default ProfileModal;
