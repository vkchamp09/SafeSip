import { Platform } from 'react-native';

// Apple Human Interface–inspired palette (iOS system colors, grouped backgrounds)
export const colors = {
  // Backgrounds & Surfaces
  background: '#F2F2F7', // systemGroupedBackground
  surface: '#FFFFFF',
  surfaceSecondary: '#F2F2F7',
  surfaceMuted: '#F9F9FB',

  // Primary: iOS system blue
  primary: '#007AFF',
  primaryHover: '#0062CC',
  primaryLight: '#E5F1FF',
  primarySubtle: '#F0F7FF',

  teal: '#30B0C7', // systemTeal
  tealLight: '#DDF4F8',
  tealSubtle: '#F0FAFC',

  // Water Quality Status Colors (iOS system green / orange / red)
  safe: '#34C759',
  safeLight: '#E4F8EA',
  safeText: '#1F8E3D',
  safeBorder: '#C5EFD2',

  caution: '#FF9500',
  cautionLight: '#FFF1DC',
  cautionText: '#B86A00',
  cautionBorder: '#FFE0B0',

  unsafe: '#FF3B30',
  unsafeLight: '#FFE7E5',
  unsafeText: '#D70015',
  unsafeBorder: '#FFC9C5',

  unverified: '#8E8E93', // systemGray
  unverifiedLight: '#F2F2F7',
  unverifiedText: '#636366',
  unverifiedBorder: '#E5E5EA',

  // Typography Neutrals (iOS label hierarchy)
  textPrimary: '#1C1C1E',
  textSecondary: '#636366',
  textMuted: '#8E8E93',
  textInverse: '#FFFFFF',

  // Borders & Dividers (hairline separators)
  border: '#E5E5EA',
  borderDark: '#D1D1D6',
  borderLight: '#F0F0F4',

  // Utility
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  overlay: 'rgba(0, 0, 0, 0.4)',
  glass: 'rgba(255, 255, 255, 0.82)',
};

// San Francisco on iOS, Roboto on Android (system fonts)
export const fontFamily = Platform.select({
  ios: 'System',
  android: 'sans-serif',
  default: 'System',
}) as string;

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  huge: 48,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: '700' as const,
    lineHeight: 38,
    color: colors.textPrimary,
    letterSpacing: -0.6,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700' as const,
    lineHeight: 30,
    color: colors.textPrimary,
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 26,
    color: colors.textPrimary,
    letterSpacing: -0.2,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 22,
    color: colors.textSecondary,
  },
  body: {
    fontSize: 15,
    fontWeight: '400' as const,
    lineHeight: 21,
    color: colors.textPrimary,
  },
  bodySecondary: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 19,
    color: colors.textSecondary,
  },
  caption: {
    fontSize: 12,
    fontWeight: '500' as const,
    lineHeight: 16,
    color: colors.textMuted,
  },
  tag: {
    fontSize: 11,
    fontWeight: '600' as const,
    lineHeight: 14,
    letterSpacing: 0.4,
    textTransform: 'uppercase' as const,
  },
  metricLarge: {
    fontSize: 36,
    fontWeight: '700' as const,
    lineHeight: 42,
    letterSpacing: -0.5,
    color: colors.textPrimary,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: '700' as const,
    lineHeight: 26,
    color: colors.textPrimary,
  },
};

export const radius = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 26,
  full: 9999,
};

// Soft, diffused iOS-style shadows (neutral black, low opacity)
export const shadows = {
  none: {},
  subtle: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 0,
  },
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 0,
  },
  elevated: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 28,
    elevation: 6,
  },
};
