import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import RootNavigator from '../../routes/rootNavigator';
import NavigationService from '../../services/NavigationService';
import { Container } from './styles';

const AppContainer = createAppContainer(RootNavigator);

export default function Main() {
	useEffect(() => {
		console.log('passou aqui');
		debugger;
		NavigationService.navigateAndReset('Main2');
	});

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#8b10ae' }}>
			<View style={{ flex: 1 }}>
				<AppContainer
					ref={navigatorRef => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
				<Container />
			</View>
		</SafeAreaView>
	);
}
