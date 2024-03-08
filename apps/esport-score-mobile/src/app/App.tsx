import React, { useRef } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Text } from 'tamagui';
import { AppProvider } from '@esport-score/ui-kit';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  return (
    <AppProvider theme="light">
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text color="$primary">gówno</Text>
        </ScrollView>
      </SafeAreaView>
    </AppProvider>
  );
};
export default App;
