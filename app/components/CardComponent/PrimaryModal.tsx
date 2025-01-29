import React, { FC } from "react";
import UserProfile from "../UserProfile/UserProfile";

interface PrimaryModalProps {
  name: string;
  avatarSrc: string;
  roles: string[];
  onClose: () => void;
}

const PrimaryModal: FC<PrimaryModalProps> = ({
  roles,
  name,
  onClose,
  avatarSrc,
}) => {
  return (
    <div
      onClick={(e) => {
        console.log("Backdrop clicked");
        onClose();
      }}
      className="fixed inset-0 bg-gray-400 bg-opacity-50 z-[10000] flex justify-end items-start cursor-default"
    >
      <div
        className="relative max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 mt-4 mr-4"
        onClick={(e) => {
          // Prevent the modal from closing when clicking inside the modal
          e.stopPropagation();
          console.log("Modal content clicked");
        }}
      >
        <button
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-800"
          onClick={() => {
            console.log("Close button clicked");
            onClose();
          }}
        >
          ✕
        </button>
        <UserProfile role={roles[0]} avatarSrc={avatarSrc} name={name} />
      </div>
    </div>
  );
};

export default PrimaryModal;

// import React, { FC } from "react";
// import UserProfile from "../UserProfile/UserProfile";

// interface PrimaryModalProps {
//   name: string;
//   avatarSrc: string;
//   roles: string[];
//   onClose: () => void;
// }

// const PrimaryModal: FC<PrimaryModalProps> = ({
//   roles,
//   name,
//   onClose,
//   avatarSrc,
// }) => {
//   return (
//     <div
//       onClick={(e) => {
//         // Check if the click target is the backdrop itself
//         if (e.target === e.currentTarget) {
//           console.log("Backdrop clicked");
//           onClose();
//         }
//       }}
//       className="fixed inset-0 bg-gray-400 bg-opacity-50 z-[10000] flex justify-end items-start cursor-default"
//     >
//       <div
//         className="relative max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 mt-4 mr-4"
//         onClick={(e) => {
//           // Prevent the modal from closing when clicking inside the modal
//           e.stopPropagation();
//           console.log("Modal content clicked");
//         }}
//       >
//         <button
//           className="absolute top-4 right-5 text-gray-500 hover:text-gray-800"
//           onClick={() => {
//             console.log("Close button clicked");
//             onClose();
//           }}
//         >
//           ✕
//         </button>
//         <UserProfile role={roles[0]} avatarSrc={avatarSrc} name={name} />
//       </div>
//     </div>
//   );
// };

// export default PrimaryModal;
