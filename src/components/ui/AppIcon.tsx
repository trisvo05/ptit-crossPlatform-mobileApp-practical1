import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {AppIconName, iconAssets} from '../../design-system/icons';

type AppIconProps = {
  name: AppIconName;
  color: string;
  size?: number;
};

export function AppIcon({name, color, size = 22}: AppIconProps) {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={{uri: iconAssets[name]}}
      style={[styles.icon, {height: size, tintColor: color, width: size}]}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
  },
});
