import React from 'react';
import { View } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import RootNavigator from './RootNavigator';
import NavigationService from './services/NavigationService';

// Debug Only - yellow box
console.disableYellowBox = true;

const AppContainer = createAppContainer(RootNavigator);

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#8b10ae' }}>
			<View style={{ flex: 1 }}>
				<AppContainer
					ref={navigatorRef => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</View>
		</SafeAreaView>
	);
}
