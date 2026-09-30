import React from 'react';
import {StyleSheet, View} from 'react-native';

import {AppTheme} from '../../design-system/theme';

type ProgressBarProps = {
  progress: number;
  color: string;
  theme: AppTheme;
  inverse?: boolean;
};

export function ProgressBar({
  progress,
  color,
  theme,
  inverse = false,
}: ProgressBarProps) {
  const safeProgress = Math.max(0, Math.min(progress, 100));

  return (
    <View
      accessibilityLabel={`Tiến độ ${safeProgress}%`}
      accessibilityRole="progressbar"
      accessibilityValue={{max: 100, min: 0, now: safeProgress}}
      style={[
        styles.track,
        {
          backgroundColor: inverse
            ? 'rgba(255,255,255,0.22)'
            : theme.colors.surfaceSubtle,
        },
      ]}>
      <View
        style={[
          styles.fill,
          {backgroundColor: color, width: `${safeProgress}%`},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    borderRadius: 999,
    height: 6,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: 999,
    height: '100%',
  },
});
