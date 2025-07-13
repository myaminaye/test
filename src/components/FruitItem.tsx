import React from "react";

interface FruitItemProps {
  label: string;
  onClick: () => void;
}

const FruitItem: React.FC<FruitItemProps> = ({ label, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="px-4 py-2 bg-purple-200 text-black rounded hover:bg-purple-700 hover:text-white  transition mx-2 cursor-pointer">
        {label}
      </button>
      <br />
    </>
  );
};

export default FruitItem;
