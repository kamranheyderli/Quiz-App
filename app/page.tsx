'use client';
import { SubjectSection } from '@/components/quiz/SubjectSection';
import { QuizSection } from '@/components/quiz/QuizSection';
import { ResultsSection } from '@/components/quiz/ResultsSection';
import { useGetSubjectsQuery } from '@/store/api/quiz';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import ErrorDisplay from '@/components/shared/ErrorDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { setQuizState } from '@/store/features/quiz/quizSlice';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { getLocalStorage } from '@/utils/cookies';

export default function HomePage() {
  const { data: quizData, isLoading, error } = useGetSubjectsQuery();
  const quizState = useSelector((state: RootState) => state.quiz.quizState);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedQuizState = getLocalStorage<string>('quizState'); 
    if (savedQuizState ) {
      dispatch(setQuizState(JSON.parse(JSON.stringify(savedQuizState))));
    }
  }, [dispatch]);

  const handleSubjectSelect = () => {
    dispatch(setQuizState('quiz'));
  };

  const handleQuizComplete = () => {
    dispatch(setQuizState('results'));
  };

  const handlePlayAgain = () => {
    dispatch(setQuizState('subject'));
  };

  if (isLoading) return <LoadingSpinner />;

  if (error) return <ErrorDisplay />;

  switch (quizState) {
    case 'quiz':
      return (
        <QuizSection data={quizData ?? []} onComplete={handleQuizComplete} />
      );
    case 'results':
      return <ResultsSection onPlayAgain={handlePlayAgain} />;
    case 'subject':
    default:
      return (
        <SubjectSection data={quizData ?? []} onSubjectSelect={handleSubjectSelect} />
      );
  }
}
