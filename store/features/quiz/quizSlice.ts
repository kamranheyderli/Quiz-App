import { getLocalStorage, setLocalStorage } from "@/utils/cookies";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type QuizState = {
  currentQuestion: number;
  score: number;
  selectedAnswer?: string | null;
  selectedSubject: string | null;
  isAnswerSubmitted: boolean;
  isQuizCompleted: boolean;
  quizState: string;
};

const initialState: QuizState = {
  currentQuestion: getLocalStorage<number>("currentQuestion") || 0,
  score: getLocalStorage<number>("score") || 0,
  selectedSubject: getLocalStorage<string>("selectedSubject") || null,
  isAnswerSubmitted: false,
  isQuizCompleted: false,
  quizState: getLocalStorage<string>("quizState") || "subject",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setSelectedAnswer: (state, action: PayloadAction<string>) => {
      state.selectedAnswer = action.payload;
    },
    submitAnswer: (state, action: PayloadAction<boolean>) => {
      state.isAnswerSubmitted = true;
      if (action.payload) {
        state.score += 1;
        setLocalStorage("score", JSON.parse(JSON.stringify(state.score)));
      }
    },
    setSelectedSubject: (state, action: PayloadAction<string>) => {
      state.selectedSubject = action.payload;
      setLocalStorage(
        "selectedSubject",
        JSON.parse(JSON.stringify(action.payload))
      );
    },
    nextQuestion: (state) => {
      state.currentQuestion += 1;
      state.selectedAnswer = null;
      state.isAnswerSubmitted = false;
      setLocalStorage(
        "currentQuestion",
        JSON.parse(JSON.stringify(state.currentQuestion))
      );
    },
    setQuizState: (state, action: PayloadAction<string>) => {
      state.quizState = action.payload;
      setLocalStorage("quizState", JSON.parse(JSON.stringify(action.payload)));
    },
    resetQuiz: (state) => {
      localStorage.clear();
      state.selectedSubject = null;
      state.score = 0;
      state.currentQuestion = 0;
    },
  },
});

export const {
  setSelectedAnswer,
  setSelectedSubject,
  submitAnswer,
  nextQuestion,
  setQuizState,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
