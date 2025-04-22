import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/youtube-short-creator'); // the route path
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#6200EA] text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-800 flex items-center space-x-2"
    >
      <span className="text-lg">+</span>
      <span>New</span>
    </button>
  );
};

export default NewButton;
