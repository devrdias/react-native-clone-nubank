import React from 'react';
import { createAppContainer } from 'react-navigation';
import RootNavigator from './routes/rootNavigator';

// Debug Only - yellow box
console.disableYellowBox = true;

const AppContainer = createAppContainer(RootNavigator);

export default function App() {
	return <RootNavigator />;
}
