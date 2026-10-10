import React from 'react';
import { Platform, Text } from 'react-native';
import { IconLegacy } from './IconLegacy';

export type IconName =
  | 'home'
  | 'map'
  | 'history'
  | 'user'
  | 'droplet'
  | 'bluetooth'
  | 'bluetooth-connected'
  | 'bluetooth-searching'
  | 'battery'
  | 'wifi'
  | 'wifi-off'
  | 'check'
  | 'alert-triangle'
  | 'alert-circle'
  | 'x'
  | 'search'
  | 'filter'
  | 'share'
  | 'chevron-right'
  | 'chevron-left'
  | 'refresh-cw'
  | 'arrow-right'
  | 'play'
  | 'compass'
  | 'map-pin'
  | 'eye'
  | 'info'
  | 'thermometer'
  | 'activity'
  | 'layers'
  | 'shield-check'
  | 'cloud-sync'
  | 'plus'
  | 'download'
  | 'flask'
  | 'locate'
  | 'minus'
  | 'log-out'
  | 'zap'
  | 'waves';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

/**
 * Lucide glyph codepoints (bundled font: android/app/src/main/assets/fonts/lucide.ttf).
 * Lucide is ISC-licensed — see LUCIDE_LICENSE.txt next to the font.
 */
const GLYPHS: Record<IconName, string> = {
  home: '',
  map: '',
  history: '',
  user: '',
  droplet: '',
  bluetooth: '',
  'bluetooth-connected': '',
  'bluetooth-searching': '',
  battery: '',
  wifi: '',
  'wifi-off': '',
  check: '',
  'alert-triangle': '',
  'alert-circle': '',
  x: '',
  search: '',
  filter: '',
  share: '',
  'chevron-right': '',
  'chevron-left': '',
  'refresh-cw': '',
  'arrow-right': '',
  play: '',
  compass: '',
  'map-pin': '',
  eye: '',
  info: '',
  thermometer: '',
  activity: '',
  layers: '',
  'shield-check': '',
  'cloud-sync': '',
  plus: '',
  download: '',
  flask: '',
  locate: '',
  minus: '',
  'log-out': '',
  zap: '',
  waves: '',
};

/**
 * Crisp vector icons (Lucide). Android renders from the bundled icon font.
 * Other platforms fall back to the View-drawn icon set.
 */
export const Icon: React.FC<IconProps> = ({ name, size = 20, color = '#636366' }) => {
  if (Platform.OS !== 'android') {
    const legacyName = name as React.ComponentProps<typeof IconLegacy>['name'];
    return <IconLegacy name={legacyName} size={size} color={color} />;
  }
  return (
    <Text
      allowFontScaling={false}
      style={{
        fontFamily: 'lucide',
        fontSize: size,
        lineHeight: size,
        width: size,
        height: size,
        color,
        textAlign: 'center',
        includeFontPadding: false,
      }}
    >
      {GLYPHS[name] ?? GLYPHS.info}
    </Text>
  );
};
