"use client";

import React from "react";
import { Card } from "antd";
import { Subject } from "@/store/api/quiz/types";
import { useAppSelector } from "@/store/hook";
import { cn } from "@/utils/cn";

type SubjectCardProps = {
  subject: Subject;
  icon: string;
  onClick: () => void;
};

const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  icon,
  onClick,
}) => {
  const { mode } = useAppSelector((state) => state.theme);

  return (
    <Card
      hoverable
      className={cn(
        "w-full md:full lg:w-[90%] transition-all duration-300",
        mode === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-[15px] flex items-center justify-center",
            mode === "dark" ? "bg-gray-700" : "bg-gray-100"
          )}
        >
          <img src={icon} className="w-10 h-10" />
        </div>
        <h3
          className={cn(
            "text-[15px] md:text-[20px]",
            mode === "dark" ? "text-white" : "text-gray-900"
          )}
        >
          {subject.name}
        </h3>
      </div>
    </Card>
  );
};

export default SubjectCard;
