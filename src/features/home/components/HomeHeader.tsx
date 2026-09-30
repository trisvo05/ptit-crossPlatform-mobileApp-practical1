import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {AppIcon} from '../../../components/ui/AppIcon';
import {STUDENT} from '../../../data/homeData';
import {
  AppTheme,
  radius,
  spacing,
  typography,
} from '../../../design-system/theme';

type HomeHeaderProps = {theme: AppTheme};

export function HomeHeader({theme}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={[styles.avatarRing, {borderColor: theme.colors.brandSoft}]}>
          <Image
            accessibilityLabel={`Ảnh đại diện của ${STUDENT.name}`}
            source={{uri: STUDENT.avatar}}
            style={styles.avatar}
          />
          <View
            style={[
              styles.onlineDot,
              {
                backgroundColor: theme.colors.success,
                borderColor: theme.colors.canvas,
              },
            ]}
          />
        </View>

        <View style={styles.profileText}>
          <Text style={[styles.greeting, {color: theme.colors.textMuted}]}>
            {STUDENT.greeting}
          </Text>
          <Text style={[styles.name, {color: theme.colors.text}]}>
            {STUDENT.name}
          </Text>
        </View>
      </View>

      <Pressable
        accessibilityLabel="Thông báo, có 3 thông báo mới"
        accessibilityRole="button"
        hitSlop={8}
        style={({pressed}) => [
          styles.notification,
          theme.shadows.card,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
          pressed && styles.pressed,
        ]}>
        <AppIcon color={theme.colors.text} name="bell" />
        <View
          style={[
            styles.notificationDot,
            {backgroundColor: theme.colors.danger},
          ]}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  avatarRing: {
    borderRadius: 30,
    borderWidth: 3,
    padding: 2,
    position: 'relative',
  },
  avatar: {
    backgroundColor: '#E5E7EC',
    borderRadius: 24,
    height: 48,
    width: 48,
  },
  onlineDot: {
    borderRadius: 6,
    borderWidth: 2,
    bottom: 1,
    height: 12,
    position: 'absolute',
    right: 0,
    width: 12,
  },
  profileText: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  greeting: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 17,
  },
  name: {
    ...typography.title,
    fontSize: 17,
    letterSpacing: -0.25,
    lineHeight: 23,
    marginTop: 1,
  },
  notification: {
    alignItems: 'center',
    borderRadius: radius.md,
    borderWidth: 1,
    height: 46,
    justifyContent: 'center',
    marginLeft: spacing.sm,
    position: 'relative',
    width: 46,
  },
  notificationDot: {
    borderColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1.5,
    height: 9,
    position: 'absolute',
    right: 8,
    top: 7,
    width: 9,
  },
  pressed: {
    opacity: 0.65,
    transform: [{scale: 0.96}],
  },
});
