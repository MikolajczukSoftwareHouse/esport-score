//! debug
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens as tamaguiTokens } from '@tamagui/theme-base';
import { useMemo } from 'react';

import {
  createTamagui,
  createTokens,
  getTokens as getTamaguiTokens,
} from 'tamagui';

export const appTokens = createTokens({
  ...tamaguiTokens,

  color: {
    ...tamaguiTokens.color,
    primary: '#3988C7',
    secondary: '#010101',
  },
  size: {
    ...tamaguiTokens.size,
    sm: 10,
    md: 15,
    lg: 25,
  },
});

export const getTokens = () => getTamaguiTokens() as typeof appTokens;
const config = createTamagui({
  themes,
  tokens: appTokens,
  shorthands,
});

/**
 *
 * @returns Workaround function untill this get fixed https://github.com/tamagui/tamagui/issues/212
 */
export const useTheme = () => {
  const tokens = getTokens();

  const result = useMemo(() => {
    return Object.keys(tokens).reduce((prev, currentOuter, index) => {
      console.log('prev and current', prev, currentOuter);
      prev[currentOuter] = Object.keys(tokens[currentOuter]).reduce(
        (prev, current: string) => {
          prev[current.slice(1)] = tokens[currentOuter][current]?.val;
          return prev;
        },
        {}
      );
      return prev;
    }, {});
  }, [tokens]);
  // console.log('result is');
  return result as typeof config.tokens;
};

export { config };
const AppTheme = config;
export { AppTheme };
export default config;