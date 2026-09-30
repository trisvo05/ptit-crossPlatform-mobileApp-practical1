import {Course, LearningStat} from '../types/course';

export const STUDENT = {
  name: 'Võ Minh Trí',
  greeting: 'Chào buổi chiều',
  avatar:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&h=240&fit=crop&crop=face',
};

export const LEARNING_STATS: LearningStat[] = [
  {id: 'courses', icon: 'courses', value: '08', label: 'Môn học', accent: '#E34B52'},
  {id: 'tasks', icon: 'tasks', value: '12', label: 'Bài tập', accent: '#F39A4A'},
  {id: 'done', icon: 'completed', value: '03', label: 'Hoàn thành', accent: '#20B486'},
];

export const COURSES: Course[] = [
  {
    id: 'mobile',
    title: 'Lập trình di động',
    category: 'Công nghệ',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop',
    lessons: 18,
    progress: 72,
    accent: '#E34B52',
  },
  {
    id: 'database',
    title: 'Cơ sở dữ liệu',
    category: 'Dữ liệu',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop',
    lessons: 14,
    progress: 100,
    accent: '#20A77C',
  },
  {
    id: 'uiux',
    title: 'Thiết kế UI/UX',
    category: 'Thiết kế',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    lessons: 12,
    progress: 45,
    accent: '#EE9442',
  },
  {
    id: 'network',
    title: 'Mạng máy tính',
    category: 'Hệ thống',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop',
    lessons: 16,
    progress: 28,
    accent: '#4A8DEB',
  },
  {
    id: 'teamwork',
    title: 'Kỹ năng làm việc nhóm',
    category: 'Kỹ năng',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop',
    lessons: 10,
    progress: 60,
    accent: '#E85E7C',
  },
];
