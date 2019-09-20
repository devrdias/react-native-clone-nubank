import React from 'react';
import QRCode from 'react-native-qrcode';
import { Container, Code } from './styles';

export default function Menu() {
	return (
		<Container>
			<Code>
				<QRCode value="https://github.com/devrdias/" size={80} fgColor="#fff" bgColor="#8b10ae" />
			</Code>
		</Container>
	);
}
