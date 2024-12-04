import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hook";
import QuizCard from "@/components/quiz/QuizCard";
import { nextQuestion } from "@/store/features/quiz/quizSlice";
import { Subject } from "@/store/api/quiz/types";

type QuizSectionProps = {
  data: Subject[];
  onComplete: () => void;
};

export const QuizSection: React.FC<QuizSectionProps> = ({
  data,
  onComplete,
}) => {
  const dispatch = useAppDispatch();
  const { currentQuestion, selectedSubject } = useAppSelector(
    (state) => state.quiz
  );

  const subjectData = data.find(
    (s) => s.name.toLowerCase() === selectedSubject?.toLowerCase()
  );

  useEffect(() => {
    if (subjectData && currentQuestion >= subjectData.questions.length) {
      dispatch(nextQuestion());
      onComplete();
    }
  }, [currentQuestion, subjectData, dispatch, onComplete]);

  if (!subjectData) return null;

  if (currentQuestion >= subjectData.questions.length) {
    return null;
  }

  const currentQuestionData = subjectData.questions[currentQuestion];

  return (
    <div className="container h-screen mx-auto px-2 lg:px-5 lg:py-8">
      <QuizCard
        question={currentQuestionData.question}
        answers={currentQuestionData.answers}
        correctAnswer={currentQuestionData.correctAnswer}
        totalQuestions={subjectData.questions.length}
      />
    </div>
  );
};
