import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
	flex: 1;
	background: #8b10ae;
	padding-top: ${getStatusBarHeight()}px;
	justify-content: center;
`;

export const Content = styled.View`
	flex: 1;
	max-height: 400px;
	z-index: 5;
`;
