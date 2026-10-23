import React from 'react';
import { EDUCATION_LEVELS, GRADES_DATA } from '../data/gradesData';
import { GradeLevelView } from '../components/grade/GradeLevelView';

export const PrimaryPage: React.FC = () => {
  const level = EDUCATION_LEVELS['tieu-hoc'];
  const grades = GRADES_DATA.filter((g) => g.levelId === 'tieu-hoc');

  return <GradeLevelView level={level} grades={grades} />;
};
