import React from "react";

interface AnswerOptionProps {
  answer: string;
  index: number;
  isCorrectAnswer: boolean;
  isWrongAnswer: boolean;
  isSelected: boolean;
  isAnswerSubmitted: boolean;
  mode: string;
  answerLetters: string[];
  handleAnswerSelect: (answer: string) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  answer,
  index,
  isCorrectAnswer,
  isWrongAnswer,
  isSelected,
  isAnswerSubmitted,
  mode,
  answerLetters,
  handleAnswerSelect,
}) => {
  const baseStyles = "lg:w-[90%] flex items-center justify-between gap-x-2 p-4 rounded-lg border cursor-pointer transition-all";
  const selectedStyles = isSelected ? "bg-[#3B4D66] border-purple-900" : "";
  const correctStyles = isCorrectAnswer ? "bg-[#3B4D66] border-green-500" : "";
  const wrongStyles = isWrongAnswer ? "bg-[#3B4D66] border-red-500" : "";
  const defaultStyles = mode === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200";
  const hoverStyles = !isAnswerSubmitted ? "hover:border-purple-500" : "cursor-not-allowed";

  // Badge background styles based on conditions
  const getBadgeBackground = () => {
    switch (true) {
      case isSelected:
        return "bg-[#3B4D66]";
      case isCorrectAnswer:
        return "bg-green-500";
      case isWrongAnswer:
        return "bg-red-500";
      case mode === "dark":
        return "bg-gray-100";
      default:
        return "bg-gray-100";
    }
  };

  const badgeBackground = getBadgeBackground();

  const badgeTextColor = isSelected || isCorrectAnswer || isWrongAnswer ? "text-white" : mode === "dark" ? "text-gray-800" : "text-gray-800";

  return (
    <div
      onClick={() => !isAnswerSubmitted && handleAnswerSelect(answer)}
      className={`${baseStyles} ${selectedStyles} ${correctStyles} ${wrongStyles} ${defaultStyles} ${hoverStyles}`}
    >
      <div className="flex items-center gap-x-2">
        <div
          className={`w-8 md:w-12 h-8 md:h-12  rounded-[10px] flex items-center justify-center ${badgeBackground}`}
        >
          <p className={`text-lg font-bold ${badgeTextColor}`}
          >
            {answerLetters[index]}
          </p>
        </div>
        <span
          className={`text-[18px] font-bold ${mode === "dark" ? "text-gray-300" : "text-gray-800"}`}
          style={{
            minWidth: "100px",
            maxWidth: "calc(100% - 3rem)",
            whiteSpace: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {answer}
        </span>
      </div>
      <div>
        {isCorrectAnswer && (
          <img src="/icon/true_icon.png" alt="Correct" className="w-8 h-8" />
        )}
        {isWrongAnswer && (
          <img
            src={mode === "dark" ? "/icon/x_error_dark.png" : "/icon/x_icon_error.jpg"}
            alt="Wrong"
            className="w-8 h-8"
          />
        )}
      </div>
    </div>
  );
};

export default AnswerOption;
