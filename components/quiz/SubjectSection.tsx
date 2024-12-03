import SubjectCard from '@/components/shared/SubjectCard';
import { useDispatch } from 'react-redux';
import { setSelectedSubject } from '@/store/features/quiz/quizSlice';
import { useAppSelector } from '@/store/hook';
import { Subject } from '@/store/api/quiz/types';
import { cn } from '@/utils/cn'; 

type SubjectSectionProps = {
  data: Subject[];
  onSubjectSelect: () => void;
};

export const SubjectSection: React.FC<SubjectSectionProps> = ({ data, onSubjectSelect }) => {
  const dispatch = useDispatch();
  const { mode } = useAppSelector((state) => state.theme);

  return (
    <div className="px-0 md:px-6 py-0 md:py-[80px] flex flex-col lg:flex-row items-center lg:items-start h-screen">
      <div className="w-full md:full lg:w-1/2 mt-8 md:mt-0 lg:mt-0 px-4 md:px0">
        <h1
          className={cn(
            "text-[35px] md:text-[45px] lg:text-[60px] font-bold mt-4 flex flex-col lg:gap-1",
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          )}
        >
          <span className={cn(mode === 'dark' ? 'text-gray-300' : 'text-gray-600', 'font-rubik')}>
            Welcome to the
          </span>
          <span className={cn(mode === 'dark' ? 'text-white' : 'text-gray-900', 'font-rubik')}>
            Frontend Quiz!
          </span>
        </h1>

        <p
          className={cn(
            "text-lg mt-5 md:mt-10 ml-0 italic",
            mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          Pick a subject to get started.
        </p>
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col gap-5 md:gap-4 px-3 md:px-0">
        {data.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            icon={subject.icon}
            onClick={() => {
              dispatch(setSelectedSubject(subject.name));
              onSubjectSelect();
            }}
          />
        ))}
      </div>
    </div>
  );
};
