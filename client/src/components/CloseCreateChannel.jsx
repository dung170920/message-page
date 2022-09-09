import React from "react";

const CloseCreateChannel = ({ setIsCreating, setIsEditing }) => {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="red"
      onClick={() => {
        if (setIsCreating) setIsCreating(false);
        if (setIsEditing) setIsEditing(false);
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CloseCreateChannel;
