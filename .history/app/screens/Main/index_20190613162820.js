import React from 'react';
import { Container } from './styles';
import { StatusBar } from 'react-native';

export default function Main() {
	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
			<Container />
		</>
	);
}
