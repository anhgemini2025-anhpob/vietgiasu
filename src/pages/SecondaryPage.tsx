import React from 'react';
import { EDUCATION_LEVELS, GRADES_DATA } from '../data/gradesData';
import { GradeLevelView } from '../components/grade/GradeLevelView';

export const SecondaryPage: React.FC = () => {
  const level = EDUCATION_LEVELS['thcs'];
  const grades = GRADES_DATA.filter((g) => g.levelId === 'thcs');

  return <GradeLevelView level={level} grades={grades} />;
};
