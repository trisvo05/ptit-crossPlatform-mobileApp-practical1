import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {AppIcon} from '../../../components/ui/AppIcon';
import {ProgressBar} from '../../../components/ui/ProgressBar';
import {
  AppTheme,
  radius,
  spacing,
  typography,
} from '../../../design-system/theme';

type FocusCardProps = {theme: AppTheme};

export function FocusCard({theme}: FocusCardProps) {
  return (
    <Pressable
      accessibilityLabel="Tiếp tục học Lập trình di động, bài 13 trên 18"
      accessibilityRole="button"
      style={({pressed}) => [
        styles.container,
        {backgroundColor: theme.colors.hero},
        pressed && styles.pressed,
      ]}>
      <View
        style={[
          styles.decorativeCircle,
          {backgroundColor: theme.colors.heroStrong},
        ]}
      />
      <View style={styles.decorativeRing} />

      <View style={styles.topRow}>
        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>TIẾP TỤC HỌC</Text>
        </View>
        <View style={styles.arrowButton}>
          <AppIcon
            color={theme.colors.onHero}
            name="chevronRight"
            size={17}
          />
        </View>
      </View>

      <Text style={styles.title}>Lập trình di động</Text>
      <Text style={styles.subtitle}>Bài 13 · React Native Components</Text>

      <View style={styles.progressRow}>
        <View style={styles.progressColumn}>
          <ProgressBar
            color={theme.colors.onHero}
            inverse
            progress={72}
            theme={theme}
          />
        </View>
        <Text style={styles.progressText}>72%</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.xl,
    marginTop: spacing.xl,
    minHeight: 190,
    overflow: 'hidden',
    padding: spacing.lg,
    position: 'relative',
  },
  decorativeCircle: {
    borderRadius: 90,
    height: 180,
    position: 'absolute',
    right: -52,
    top: -64,
    width: 180,
  },
  decorativeRing: {
    borderColor: 'rgba(255,255,255,0.10)',
    borderRadius: 70,
    borderWidth: 24,
    bottom: -70,
    height: 140,
    position: 'absolute',
    right: 28,
    width: 140,
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderColor: 'rgba(255,255,255,0.16)',
    borderRadius: 999,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgeDot: {
    backgroundColor: '#B9F3DA',
    borderRadius: 3,
    height: 6,
    marginRight: 6,
    width: 6,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.9,
  },
  arrowButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 14,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  title: {
    ...typography.heading,
    color: '#FFFFFF',
    fontSize: 22,
    letterSpacing: -0.45,
    lineHeight: 28,
    marginTop: spacing.lg,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 17,
    marginTop: 3,
  },
  progressRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  progressColumn: {
    flex: 1,
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    marginLeft: 12,
  },
  pressed: {
    opacity: 0.9,
    transform: [{scale: 0.985}],
  },
});
