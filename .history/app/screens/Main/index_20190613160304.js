import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import RootNavigator from '../../routes/rootNavigator';
import NavigationService from '../../services/NavigationService';
import { Container } from './styles';

const AppContainer = createAppContainer(RootNavigator);

export default function Main() {
	return <Container />;
}
