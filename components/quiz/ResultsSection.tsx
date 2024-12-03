import { useAppSelector, useAppDispatch } from "@/store/hook";
import { resetQuiz } from "@/store/features/quiz/quizSlice";
import { Card } from "antd";
import QuizButton from "../shared/QuizButton";
import { cn } from "@/utils/cn";
import ConfettiComponent from "@/components/shared/ConfettiAnimations"; 

type ResultsSectionProps = {
  onPlayAgain: () => void;
};

export const ResultsSection: React.FC<ResultsSectionProps> = ({
  onPlayAgain,
}) => {
  const dispatch = useAppDispatch();
  const { score } = useAppSelector((state) => state.quiz);
  const selectedSubject = useAppSelector((state) => state.quiz.selectedSubject);
  const { mode } = useAppSelector((state) => state.theme);

  const handlePlayAgain = () => {
    dispatch(resetQuiz());
    onPlayAgain();
  };

  const isScoreHigh = score > 5;

  return (
    <div
      className={cn(
        "w-full h-screen flex flex-col lg:flex-row mx-auto px-4 py-8 gap-6 overflow-hidden",
        mode === "dark" ? "bg-gray text-white" : "bg-gray-50 text-gray-900"
      )}
    >
      <ConfettiComponent isScoreHigh={isScoreHigh} />

      <div className="left w-full lg:w-[50%]">
        <div className="text-start mt-5 md:mt-0">
          <p
            className={cn(
              "text-[45px] md:text-[64px]",
              mode === "dark" ? "text-gray-100" : "text-gray-500",
              "font-rubik"
            )}
          >
            Quiz Completed!
          </p>
          <h3
            className={cn(
              "text-[35px] md:text-[64px] font-rubik font-bold",
              mode === "dark" ? "text-gray-100" : "text-gray-900"
            )}
          >
            You scored...
          </h3>
        </div>
      </div>

      <div className="right flex items-center flex-col w-full lg:w-[50%]">
        <Card
          className={cn(
            "w-full lg:w-[80%] border rounded-xl p-5 mx-auto flex items-center justify-center flex-col mt-10 md:mt-0",
            mode === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
          )}
        >
          <div className="head_select flex items-center gap-x-5">
            {selectedSubject === "HTML" && <img src="/icon/html.png" className="w-12 h-12 mr-2" />}
            {selectedSubject === "CSS" && <img src="/icon/css.png" className="w-12 h-12 mr-2" />}
            {selectedSubject === "JavaScript" && <img src="/icon/javascript.png" className="w-12 h-12 mr-2" />}
            <p
              className={cn(
                "text-[28px] font-rubik",
                mode === "dark" ? "text-gray-300" : "text-gray-900"
              )}
            >
              {selectedSubject}
            </p>
          </div>
          <p
            className={cn(
              "text-[144px] text-center",
              mode === "dark" ? "text-gray-300" : "text-gray-900"
            )}
          >
            {score}
          </p>
        </Card>
        <div className="w-full md:full lg:w-[80%]">
          <QuizButton label="Play Again" onClick={handlePlayAgain} isDisabled={false} />
        </div>
      </div>
    </div>
  );
};
