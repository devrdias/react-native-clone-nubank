import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import RootNavigator from './routes/rootNavigator';
import NavigationService from './services/NavigationService';

// Debug Only - yellow box
console.disableYellowBox = false;

const AppContainer = createAppContainer(RootNavigator);

function App() {
  useEffect(() => {
    NavigationService.navigateAndReset('Main');
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
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

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#8b10ae',
  },
});

export default App;
