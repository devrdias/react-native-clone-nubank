import React from 'react';
import { StatusBar } from 'react-native';

// Debug Only - yellow box
console.disableYellowBox = true;

export default function App() {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<RootScreen />
		</>
	);
}
