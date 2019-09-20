import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';
import {
	Annotation,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	Container,
	Content,
	Description,
	Title
} from './styles';

export default function Main() {
	const translateY = new Animated.Value(0);

	const animatedEvent = Animated.event(
		[
			{
				nativeEvent: {
					translationY: translateY
				}
			}
		],
		{ useNativeDriver: true }
	);

	function onHandlerStateChange(event) {}

	return (
		<Container>
			<Header />

			<Content>
				<Menu translateY={translateY} />

				<PanGestureHandler
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onHandlerStateChange}
				>
					<Card
						style={{
							transform: [
								{
									translateY: translateY.interpolate({
										inputRange: [-350, 0, 380],
										outputRange: [-50, 0, 380],
										extrapolate: 'clamp' // avoid event out of the Ranges
									})
								}
							]
						}}
					>
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
			<Tabs translateY={translateY} />
		</Container>
	);
}
