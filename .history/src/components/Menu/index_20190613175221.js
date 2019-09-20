import React from 'react';
import QRCode from 'react-native-qrcode';
import { Container, Code } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu() {
	return (
		<Container>
			<Code>
				<QRCode value="https://github.com/devrdias/" size={80} fgColor="#fff" bgColor="#8b10ae" />
			</Code>

			<Nav>
				<NavItem>
					<Icon name="help-outline" size={20} color="#fff" />
				</NavItem>
			</Nav>
		</Container>
	);
}
