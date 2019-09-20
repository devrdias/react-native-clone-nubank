import React from 'react';
import { createAppContainer } from 'react-navigation';
import RootNavigator from '../../routes/rootNavigator';
import { Container } from './styles';

const AppContainer = createAppContainer(RootNavigator);

export default function Main() {
	return <Container />;
}
