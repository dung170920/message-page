import React from "react";

const AddChannel = ({
  setCreateType,
  setIsCreating,
  setIsEditing,
  setToggleContainer,
  type,
}) => {
  return (
    <svg
      width={18}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      onClick={() => {
        setCreateType(type);
        setIsCreating((prevState) => !prevState);
        setIsEditing(false);
        if (setToggleContainer) setToggleContainer((prevState) => !prevState);
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default AddChannel;
