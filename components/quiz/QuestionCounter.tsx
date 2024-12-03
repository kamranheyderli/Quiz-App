import React from "react";

type QuestionCounterProps = {
  currentQuestion: number;
  totalQuestions: number;
}

const QuestionCounter: React.FC<QuestionCounterProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div className="text-sm font-rubik italic text-gray-600 mb-2">
      Question {currentQuestion + 1} of {totalQuestions}
    </div>
  );
};

export default QuestionCounter;
