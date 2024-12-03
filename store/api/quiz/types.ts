export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface Subject {
  id: number;
  name: string;
  icon: string;
  questions: Question[];
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  selectedAnswer: string | null;
  isAnswerSubmitted: boolean;
  isQuizCompleted: boolean;
  quizState:string |null
}
