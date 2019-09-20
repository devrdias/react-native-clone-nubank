import React from 'react';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
	Container,
	Content,
	Card,
	CardHeader,
	CardContent,
	Title,
	Description,
	CardFooter,
	Annotation
} from './styles';

export default function Main() {
	return (
		<Container>
			<Header />

			<Content>
				<Menu />

				<Card>
					<CardHeader>
						<Icon name="attach-money" size={28} color="#666" />
						<Icon name="visibility-off" size={28} color="#666" />
					</CardHeader>
					<CardContent>
						<Title>Saldo disponível</Title>
						<Description>R$ 197.611,65</Description>
					</CardContent>
					<CardFooter>
						<Annotation>
							Transferência de R$ 20,00 recebida de Rafael recebida hoje as 14 h.
						</Annotation>
					</CardFooter>
				</Card>
			</Content>
			<Tabs />
		</Container>
	);
}
