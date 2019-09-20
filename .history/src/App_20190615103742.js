import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import RootNavigator from './routes/rootNavigator';
import NavigationService from './services/NavigationService';

// Debug Only - yellow box
console.disableYellowBox = false;

if (__DEV__) {
  import('./config//ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const AppContainer = createAppContainer(RootNavigator);

export default function App() {
  useEffect(() => {
    NavigationService.navigateAndReset('Main');
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#8b10ae' }}>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
