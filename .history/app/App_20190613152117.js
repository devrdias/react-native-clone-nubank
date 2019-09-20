import React from 'react';
import { View } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import RootNavigator from './routes/rootNavigator';
import NavigationService from './services/NavigationService';
import Main from './screens/Main';

// Debug Only - yellow box
console.disableYellowBox = true;

const AppContainer = createAppContainer(RootNavigator);

export default function App() {
	return (
		<Main/>
	);
}
