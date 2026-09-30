import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {AppIcon} from '../../../components/ui/AppIcon';
import {ProgressBar} from '../../../components/ui/ProgressBar';
import {
  AppTheme,
  radius,
  spacing,
  typography,
} from '../../../design-system/theme';
import {Course} from '../../../types/course';

type CourseCardProps = {
  course: Course;
  theme: AppTheme;
};

export function CourseCard({course, theme}: CourseCardProps) {
  const isComplete = course.progress === 100;

  return (
    <Pressable
      accessibilityLabel={`${course.title}, ${course.lessons} bài học, hoàn thành ${course.progress}%`}
      accessibilityRole="button"
      style={({pressed}) => [
        styles.container,
        theme.shadows.card,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        },
        pressed && styles.pressed,
      ]}>
      <Image
        accessibilityLabel={`Ảnh minh họa môn ${course.title}`}
        source={{uri: course.image}}
        style={styles.thumbnail}
      />

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <View style={styles.titleBlock}>
            <Text
              numberOfLines={1}
              style={[styles.title, {color: theme.colors.text}]}>
              {course.title}
            </Text>
            <Text style={[styles.category, {color: theme.colors.textMuted}]}>
              {course.category} · {course.lessons} bài học
            </Text>
          </View>
          <AppIcon
            color={theme.colors.textSubtle}
            name="chevronRight"
            size={16}
          />
        </View>

        <View style={styles.progressHeader}>
          <Text style={[styles.progressCaption, {color: theme.colors.textMuted}]}>
            Tiến độ
          </Text>
          {isComplete ? (
            <View
              style={[
                styles.completeBadge,
                {backgroundColor: theme.colors.successSoft},
              ]}>
              <Text
                style={[styles.completeText, {color: theme.colors.success}]}>
                Đã hoàn thành
              </Text>
            </View>
          ) : (
            <Text style={[styles.progressValue, {color: course.accent}]}>
              {course.progress}%
            </Text>
          )}
        </View>

        <ProgressBar
          color={course.accent}
          progress={course.progress}
          theme={theme}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 126,
    padding: spacing.md,
  },
  thumbnail: {
    backgroundColor: '#E8EAF0',
    borderRadius: radius.md,
    height: 96,
    marginRight: spacing.sm,
    resizeMode: 'cover',
    width: 76,
  },
  content: {
    flex: 1,
    minWidth: 0,
  },
  titleRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  titleBlock: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    ...typography.title,
    fontSize: 15,
    letterSpacing: -0.2,
    lineHeight: 21,
  },
  category: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 15,
    marginTop: 2,
  },
  progressHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop: 13,
  },
  progressCaption: {
    fontSize: 10,
    fontWeight: '600',
  },
  progressValue: {
    fontSize: 10,
    fontWeight: '800',
  },
  completeBadge: {
    borderRadius: 999,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  completeText: {
    fontSize: 8,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.82,
    transform: [{scale: 0.985}],
  },
});
