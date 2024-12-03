import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setSelectedAnswer, submitAnswer, nextQuestion } from '@/store/features/quiz/quizSlice';
import QuestionCounter from '../quiz/QuestionCounter';
import AnswerOption from './AnswerOption';
import ProgressBar from '../shared/ProgressBar';
import QuizButton from '../shared/QuizButton';

type QuizCardProps = {
  question: string;
  answers: string[];
  correctAnswer: string;
  totalQuestions: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  answers,
  correctAnswer,
  totalQuestions,
}) => {
  const dispatch = useAppDispatch();
  const { currentQuestion, selectedAnswer, isAnswerSubmitted } = useAppSelector(
    (state) => state.quiz
  );

  console.log(currentQuestion)
  const { mode } = useAppSelector((state) => state.theme);

  const [error, setError] = useState<boolean>(false);

  const answerLetters = ['A', 'B', 'C', 'D'];

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswerSubmitted) {
      setError(false);
      dispatch(setSelectedAnswer(answer));
    }
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setError(true);
      return;
    }
    dispatch(submitAnswer(selectedAnswer === correctAnswer));
  };

  const handleNext = () => {
    dispatch(nextQuestion());
    setError(false);
  };
  const handleFinish = () => {
    dispatch(nextQuestion());
    setError(false);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between mt-10 lg:mt-0">
      <div className="left w-full lg:w-[50%] pr-5 relative mt-8 lg:mt-0 ml-2 md:ml-0">
        <div className="questions_count">
          <QuestionCounter
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
          />
        </div>
        <h2
          className={`text-[22px] md:text-[36px] font-rubik font-bold mb-10 lg:mb-0 w-[95%]  ${mode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
        >
          {question}
        </h2>
        <div className="progress_bar lg:absolute  bottom-[60px]  w-full">
          <ProgressBar
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
          />
        </div>
      </div>
      <div className="right w-full lg:w-[50%] p-2 mt-3 lg:mt-0">
        <div className="space-y-4 mb-6">
          {answers.map((answer, index) => {
            const isCorrectAnswer = isAnswerSubmitted && answer === correctAnswer;
            const isWrongAnswer =
              isAnswerSubmitted && selectedAnswer === answer && answer !== correctAnswer;
            const isSelected = selectedAnswer === answer && !isAnswerSubmitted;
            return (
              <AnswerOption
                key={index}
                answer={answer}
                index={index}
                isCorrectAnswer={isCorrectAnswer}
                isWrongAnswer={isWrongAnswer}
                isSelected={isSelected}
                isAnswerSubmitted={isAnswerSubmitted}
                mode={mode}
                answerLetters={answerLetters}
                handleAnswerSelect={handleAnswerSelect}
              />
            );
          })}

        </div>


        <div className="w-full lg:w-[90%]">
          {isAnswerSubmitted ? (
            <QuizButton
              label={currentQuestion === 9 ? 'Finish' : 'Next Question'}
              onClick={currentQuestion === 9 ? handleFinish : handleNext}
            />
          ) : (
            <QuizButton
              label="Submit Answer"
              onClick={handleSubmit}
              isDisabled={false}
            />
          )}
        </div>

        {error && (
          <div className="flex items-center mt-2 justify-center">
            <img
              className="w-8 h-8 opacity-80"
              src={mode === 'dark' ? '/icon/x_error_dark.png' : '/icon/x_icon_error.jpg'}
              alt="Error"
            />            <p
              className={`font-rubik text-[20px] ${mode === 'dark' ? 'text-red-300' : 'text-red-500'
                }`}
            >
              Please select an answer
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
