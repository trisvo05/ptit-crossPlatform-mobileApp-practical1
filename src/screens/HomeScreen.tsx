import React, {useMemo, useState} from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AppIcon} from '../components/ui/AppIcon';
import {COURSES} from '../data/homeData';
import {
  radius,
  spacing,
  typography,
  useAppTheme,
} from '../design-system/theme';
import {BottomNavigation} from '../features/home/components/BottomNavigation';
import {CourseCard} from '../features/home/components/CourseCard';
import {FocusCard} from '../features/home/components/FocusCard';
import {HomeHeader} from '../features/home/components/HomeHeader';
import {SearchField} from '../features/home/components/SearchField';
import {StatsSection} from '../features/home/components/StatsSection';

export function HomeScreen() {
  const theme = useAppTheme();
  const [query, setQuery] = useState('');

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('vi');

    if (!normalizedQuery) {
      return COURSES;
    }

    return COURSES.filter(course =>
      `${course.title} ${course.category}`
        .toLocaleLowerCase('vi')
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.safeArea, {backgroundColor: theme.colors.canvas}]}>
      <StatusBar
        backgroundColor={theme.colors.canvas}
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
      />

      <FlatList
        contentContainerStyle={styles.listContent}
        data={filteredCourses}
        ItemSeparatorComponent={CourseSeparator}
        keyboardShouldPersistTaps="handled"
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <View
              style={[
                styles.emptyIcon,
                {backgroundColor: theme.colors.brandSoft},
              ]}>
              <AppIcon color={theme.colors.brand} name="search" />
            </View>
            <Text style={[styles.emptyTitle, {color: theme.colors.text}]}>
              Không tìm thấy môn học
            </Text>
            <Text style={[styles.emptyBody, {color: theme.colors.textMuted}]}>
              Hãy thử một từ khóa ngắn hơn nhé.
            </Text>
          </View>
        }
        ListFooterComponent={<View style={styles.listFooter} />}
        ListHeaderComponent={
          <>
            <HomeHeader theme={theme} />
            <FocusCard theme={theme} />

            <View style={styles.overviewHeader}>
              <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>
                Tổng quan
              </Text>
              <Text
                style={[styles.sectionMeta, {color: theme.colors.textMuted}]}>
                Học kỳ 1 · 2026
              </Text>
            </View>
            <StatsSection theme={theme} />

            <SearchField
              onChangeText={setQuery}
              theme={theme}
              value={query}
            />

            <View style={styles.courseHeader}>
              <View>
                <Text
                  style={[styles.sectionTitle, {color: theme.colors.text}]}>
                  Môn học của bạn
                </Text>
                <Text
                  style={[styles.sectionSubtitle, {color: theme.colors.textMuted}]}>
                  Tiếp tục hành trình học tập
                </Text>
              </View>
              <Text style={[styles.viewAll, {color: theme.colors.brand}]}>
                Xem tất cả
              </Text>
            </View>
          </>
        }
        renderItem={({item}) => <CourseCard course={item} theme={theme} />}
        showsVerticalScrollIndicator={false}
      />

      <BottomNavigation theme={theme} />
    </SafeAreaView>
  );
}

function CourseSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  overviewHeader: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
  },
  sectionTitle: {
    ...typography.heading,
    fontSize: 19,
    letterSpacing: -0.35,
    lineHeight: 25,
  },
  sectionMeta: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 15,
  },
  courseHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
    marginTop: spacing.xxl,
  },
  sectionSubtitle: {
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 16,
    marginTop: 2,
  },
  viewAll: {
    fontSize: 11,
    fontWeight: '800',
    marginLeft: 12,
  },
  separator: {
    height: 12,
  },
  listFooter: {
    height: 28,
  },
  emptyState: {
    alignItems: 'center',
    paddingBottom: 54,
    paddingTop: 30,
  },
  emptyIcon: {
    alignItems: 'center',
    borderRadius: radius.xl,
    height: 56,
    justifyContent: 'center',
    marginBottom: 12,
    width: 56,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 21,
  },
  emptyBody: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3,
  },
});
