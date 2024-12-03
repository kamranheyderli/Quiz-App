import React from 'react';

type ProgressBarProps = {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="w-full lg:w-[90%] bg-gray-200 rounded-full h-2.5 mb-6">
      <div
        className="bg-purple-600 h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
