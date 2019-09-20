import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TabItem, TabsContainer, TabText } from './styles';

export default function Tabs() {
	return (
		<Container>
			<TabsContainer>
				<TabItem>
					<Icon name="person-add" size={24} color="#fff" />
					<TabText>Indicar amigos</TabText>
				</TabItem>
			</TabsContainer>
		</Container>
	);
}
