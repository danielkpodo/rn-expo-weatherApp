import React from 'react';
import { Text as Label, StyleProp, TextProps, TextStyle } from 'react-native';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  weight?: FontWeights;
  size?: Sizes;
  color?: TextStyle['color'];
}

type FontWeights =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const textSizeMap: Record<Sizes, TextStyle> = {
  xl: { fontSize: 24, lineHeight: 36 },
  lg: { fontSize: 20, lineHeight: 30 },
  md: { fontSize: 16, lineHeight: 24 },
  sm: { fontSize: 14, lineHeight: 22 },
  xs: { fontSize: 12, lineHeight: 18 },
};

export const FONT_FAMILY: Record<FontWeights, string> = {
  '100': 'Inter_100Thin',
  '200': 'Inter_200ExtraLight',
  '300': 'Inter_300Light',
  '400': 'Inter_400Regular',
  '500': 'Inter_500Medium',
  '600': 'Inter_600SemiBold',
  '700': 'Inter_700Bold',
  '800': 'Inter_800ExtraBold',
  '900': 'Inter_900Black',
};

const Text = ({
  children,
  size = 'sm',
  weight = '400',
  color = '#111827',
  style,
}: CustomTextProps) => {
  const textStyles: StyleProp<TextStyle>[] = [
    {
      fontFamily: FONT_FAMILY[weight],
    },
    textSizeMap[size],
    { color },
    style,
  ];

  return <Label style={textStyles}>{children}</Label>;
};

export default Text;
