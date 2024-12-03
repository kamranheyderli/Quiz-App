import React from 'react';

type QuizButtonProps = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  size?: number; 
};

const QuizButton: React.FC<QuizButtonProps> = ({ label, onClick, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className="mt-2  w-full font-medium h-12 rounded-lg transition-all duration-200 bg-purple-600 text-white border-none disabled:bg-gray-400"
    >
      {label}
    </button>
  );
};

export default QuizButton;
