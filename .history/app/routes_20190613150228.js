import NavigationService from '@services/NavigationService';
import { View } from 'native-base';
import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import StartupActions from '../../redux/actions/startupActions';
import RootNavigator from './RootNavigator';
import styles from './RootScreenStyle';

const AppContainer = createAppContainer(RootNavigator);

export default function RootScreen() {
	const { loading } = props;

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<View style={styles.container}>
				<Spinner
					visible={loading}
					animation={'fade'}
					// textContent={'Carregando...'}
					textStyle={{ color: '#FFF' }}
				/>
				<AppContainer
					ref={navigatorRef => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</View>
		</SafeAreaView>
	);
}
