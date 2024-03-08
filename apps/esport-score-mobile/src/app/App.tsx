/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, View, StatusBar } from 'react-native';
import { Text } from 'tamagui';
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/accessible-emoji */
import { AppProvider } from '@esport-score/ui';

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
          <Text color="$primary">testtest</Text>
        </ScrollView>
      </SafeAreaView>
    </AppProvider>
  );
};
export default App;
