import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {AppIcon} from '../../../components/ui/AppIcon';
import {LEARNING_STATS} from '../../../data/homeData';
import {
  AppTheme,
  radius,
  spacing,
  typography,
} from '../../../design-system/theme';

type StatsSectionProps = {theme: AppTheme};

export function StatsSection({theme}: StatsSectionProps) {
  return (
    <View style={styles.container}>
      {LEARNING_STATS.map(stat => (
        <View
          key={stat.id}
          style={[
            styles.card,
            theme.shadows.card,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
          ]}>
          <View
            style={[
              styles.iconWrap,
              {backgroundColor: `${stat.accent}16`},
            ]}>
            <AppIcon color={stat.accent} name={stat.icon} size={17} />
          </View>
          <Text style={[styles.value, {color: theme.colors.text}]}>
            {stat.value}
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.label, {color: theme.colors.textMuted}]}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    flex: 1,
    minWidth: 0,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  iconWrap: {
    alignItems: 'center',
    borderRadius: 10,
    height: 32,
    justifyContent: 'center',
    marginBottom: 12,
    width: 32,
  },
  value: {
    ...typography.heading,
    fontSize: 20,
    letterSpacing: -0.3,
    lineHeight: 24,
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 15,
    marginTop: 2,
  },
});
