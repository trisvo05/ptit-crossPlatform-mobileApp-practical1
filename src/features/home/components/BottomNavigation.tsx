import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppIcon } from '../../../components/ui/AppIcon';
import { AppTheme } from '../../../design-system/theme';

type BottomNavigationProps = { theme: AppTheme };

const TABS = [
  { id: 'home', icon: 'home', label: 'Trang chủ' },
  { id: 'courses', icon: 'courses', label: 'Môn học' },
  { id: 'tasks', icon: 'tasks', label: 'Bài tập' },
  { id: 'profile', icon: 'profile', label: 'Cá nhân' },
] as const;

export function BottomNavigation({ theme }: BottomNavigationProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        theme.shadows.floating,
        {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          paddingBottom: Math.max(insets.bottom, 9),
        },
      ]}>
      {TABS.map(tab => {
        const active = tab.id === 'home';

        return (
          <Pressable
            accessibilityLabel={tab.label}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            key={tab.id}
            style={({ pressed }) => [
              styles.tab,
              pressed && styles.pressed,
            ]}>
            <View
              style={[
                styles.iconWrap,
                active && { backgroundColor: theme.colors.brandSoft },
              ]}>
              <AppIcon
                color={
                  active ? theme.colors.brand : theme.colors.textSubtle
                }
                name={tab.icon}
                size={19}
              />
            </View>
            <Text
              style={[
                styles.label,
                {
                  color: active
                    ? theme.colors.brand
                    : theme.colors.textMuted,
                  fontWeight: active ? '800' : '600',
                },
              ]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  iconWrap: {
    alignItems: 'center',
    borderRadius: 12,
    height: 31,
    justifyContent: 'center',
    width: 44,
  },
  label: {
    fontSize: 9,
    lineHeight: 13,
    marginTop: 3,
  },
  pressed: {
    opacity: 0.55,
    transform: [{ scale: 0.96 }],
  },
});
