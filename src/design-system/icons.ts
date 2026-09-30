export const iconAssets = {
  bell: 'https://img.icons8.com/ios-filled/96/000000/appointment-reminders.png',
  search: 'https://img.icons8.com/ios-filled/96/000000/search--v1.png',
  close: 'https://img.icons8.com/ios-filled/96/000000/multiply.png',
  home: 'https://img.icons8.com/ios-filled/96/000000/home.png',
  courses: 'https://img.icons8.com/ios-filled/96/000000/books.png',
  tasks: 'https://img.icons8.com/ios-filled/96/000000/task.png',
  profile: 'https://img.icons8.com/ios-filled/96/000000/user.png',
  completed: 'https://img.icons8.com/ios-filled/96/000000/checked-checkbox.png',
  chevronRight:
    'https://img.icons8.com/ios-filled/96/000000/chevron-right.png',
} as const;

export type AppIconName = keyof typeof iconAssets;
