import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';

import {AppIcon} from '../../../components/ui/AppIcon';
import {
  AppTheme,
  radius,
  spacing,
  typography,
} from '../../../design-system/theme';

type SearchFieldProps = {
  theme: AppTheme;
  value: string;
  onChangeText: (value: string) => void;
};

export function SearchField({
  theme,
  value,
  onChangeText,
}: SearchFieldProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        },
      ]}>
      <View
        style={[
          styles.searchIconWrap,
          {backgroundColor: theme.colors.surfaceSubtle},
        ]}>
        <AppIcon color={theme.colors.textMuted} name="search" />
      </View>

      <TextInput
        accessibilityLabel="Tìm kiếm môn học"
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder="Tìm kiếm môn học..."
        placeholderTextColor={theme.colors.textSubtle}
        selectionColor={theme.colors.brand}
        style={[styles.input, {color: theme.colors.text}]}
        value={value}
      />

      {value.length > 0 && (
        <Pressable
          accessibilityLabel="Xóa nội dung tìm kiếm"
          hitSlop={10}
          onPress={() => onChangeText('')}
          style={({pressed}) => [pressed && styles.pressed]}>
          <View style={styles.clear}>
            <AppIcon color={theme.colors.textMuted} name="close" size={15} />
          </View>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    height: 58,
    marginTop: spacing.xl,
    paddingHorizontal: 10,
  },
  searchIconWrap: {
    alignItems: 'center',
    borderRadius: 11,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  input: {
    ...typography.body,
    flex: 1,
    fontWeight: '500',
    height: '100%',
    marginLeft: 10,
    paddingVertical: 0,
  },
  clear: {
    paddingHorizontal: 8,
  },
  pressed: {
    opacity: 0.55,
  },
});
