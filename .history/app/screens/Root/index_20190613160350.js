import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import RootNavigator from '../../routes/rootNavigator';
import NavigationService from '../../services/NavigationService';

const AppContainer = createAppContainer(RootNavigator);

export default function Main() {
	useEffect(() => {
		console.log('passou aqui');
		debugger;
		NavigationService.navigateAndReset('Main');
	});

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
