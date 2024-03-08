import { config } from './AppTheme';
import { TamaguiProvider } from 'tamagui';

export const AppProvider = ({
  theme = 'dark',
  children,
}: {
  children: any;
  theme?: string;
}) => {
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={theme}
    >
      {children}
    </TamaguiProvider>
  );
};
export default AppProvider;
