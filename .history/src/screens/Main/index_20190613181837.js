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

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

export default function Main() {
	const translateY = new Animated.Value(0);
	const animatedEvent = Animated.event([
		{
			nativeEvent: {
				translationY: translateY
			}
		}
	]);

	function onHandlerStateChange(event) {

	}


	return (
		<Container>
			<Header />

			<Content>
				<Menu />

				<PanGestureHandler
				onGestureEvent={}
				onHandlerStateChange={onHandlerStateChange}>
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
				</PanGestureHandler>
			</Content>
			<Tabs />
		</Container>
	);
}
