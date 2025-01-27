import React from 'react';
import { Container, Top, Logo, Title } from './styles';
import logo from '../../assets/Nubank_Logo.png';

export default function Header() {
	return (
		<Container>
			<Top>
				<Logo source={logo} />
				<Title>Rafael</Title>
			</Top>
		</Container>
	);
}
