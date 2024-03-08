import { config } from './AppTheme';
import { TamaguiProvider } from 'tamagui';

export const AppProvider = ({
  theme = 'dark',
  children,
}: {
  children: React.ReactNode;
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
