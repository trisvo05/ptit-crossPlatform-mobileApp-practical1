import {AppIconName} from '../design-system/icons';

export type Course = {
  id: string;
  title: string;
  category: string;
  image: string;
  lessons: number;
  progress: number;
  accent: string;
};

export type LearningStat = {
  id: string;
  icon: AppIconName;
  value: string;
  label: string;
  accent: string;
};
