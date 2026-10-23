import React from 'react';
import { EDUCATION_LEVELS, GRADES_DATA } from '../data/gradesData';
import { GradeLevelView } from '../components/grade/GradeLevelView';

export const HighSchoolPage: React.FC = () => {
  const level = EDUCATION_LEVELS['thpt'];
  const grades = GRADES_DATA.filter((g) => g.levelId === 'thpt');

  return <GradeLevelView level={level} grades={grades} />;
};
