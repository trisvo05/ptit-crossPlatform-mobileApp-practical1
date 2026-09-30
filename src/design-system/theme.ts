import {useColorScheme, ViewStyle} from 'react-native';

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  huge: 40,
} as const;

export const radius = {
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  pill: 999,
} as const;

export const typography = {
  display: {fontSize: 30, lineHeight: 36, fontWeight: '800' as const},
  heading: {fontSize: 20, lineHeight: 26, fontWeight: '800' as const},
  title: {fontSize: 16, lineHeight: 22, fontWeight: '700' as const},
  body: {fontSize: 14, lineHeight: 21, fontWeight: '400' as const},
  label: {fontSize: 12, lineHeight: 16, fontWeight: '600' as const},
  caption: {fontSize: 11, lineHeight: 15, fontWeight: '500' as const},
} as const;

const palette = {
  crimson500: '#E34B52',
  crimson600: '#D83A45',
  crimson700: '#B92B38',
  green500: '#20B486',
  orange500: '#F39A4A',
  blue500: '#4A8DEB',
  rose500: '#E85E7C',
  white: '#FFFFFF',
  red500: '#F05252',
} as const;

export type AppTheme = ReturnType<typeof createTheme>;

function createTheme(isDark: boolean) {
  const colors = isDark
    ? {
        canvas: '#0E1119',
        surface: '#181D29',
        surfaceRaised: '#202634',
        surfaceSubtle: '#252C3B',
        text: '#F7F8FC',
        textMuted: '#9DA6B8',
        textSubtle: '#707B90',
        border: '#2B3343',
        borderStrong: '#3A4355',
        brand: '#FF7177',
        brandStrong: '#E95760',
        brandSoft: '#49262B',
        success: '#42C99D',
        successSoft: '#173D34',
        warning: '#F6AA61',
        warningSoft: '#44321F',
        danger: palette.red500,
        hero: '#C73742',
        heroStrong: '#A92531',
        onHero: palette.white,
      }
    : {
        canvas: '#F6F7FB',
        surface: palette.white,
        surfaceRaised: palette.white,
        surfaceSubtle: '#F0F2F7',
        text: '#171A2B',
        textMuted: '#687086',
        textSubtle: '#9BA1B1',
        border: '#E8EAF0',
        borderStrong: '#DADDE6',
        brand: palette.crimson500,
        brandStrong: palette.crimson700,
        brandSoft: '#FDECEE',
        success: '#169A70',
        successSoft: '#E3F7F0',
        warning: '#D97D2B',
        warningSoft: '#FFF0DF',
        danger: palette.red500,
        hero: palette.crimson600,
        heroStrong: palette.crimson700,
        onHero: palette.white,
      };

  const shadows: Record<'card' | 'floating', ViewStyle> = {
    card: {
      elevation: isDark ? 0 : 2,
      shadowColor: isDark ? '#000000' : '#26304A',
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: isDark ? 0 : 0.06,
      shadowRadius: 14,
    },
    floating: {
      elevation: isDark ? 8 : 16,
      shadowColor: '#11162A',
      shadowOffset: {width: 0, height: -5},
      shadowOpacity: isDark ? 0.28 : 0.1,
      shadowRadius: 18,
    },
  };

  return {
    isDark,
    colors,
    palette,
    radius,
    shadows,
    spacing,
    typography,
  };
}

export function useAppTheme(): AppTheme {
  const isDark = useColorScheme() === 'dark';
  return createTheme(isDark);
}
