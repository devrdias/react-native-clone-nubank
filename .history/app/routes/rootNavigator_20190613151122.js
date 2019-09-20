import MainScreen from '../screens/Main';
import { Animated, Easing, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

const routeConfig = {
	headerMode: 'none',
	initialRouteName: 'Main',
	transparentCard: false,
	cardStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.6)', // overlay
		opacity: 1
	},
	defaultNavigationOptions: {
		translucent: 'true',
		headerStyle: {
			backgroundColor: '#8b10ae',
			elevation: 1,
			paddingTop: 40
		},
		headerTitleStyle: {
			textAlign: 'center',
			fontFamily: 'Geomanist-Medium',
			alignSelf: 'center'
		},
		headerTintColor: '#8b10ae',
		mode: (Platform.OS = index == 'ios' ? 'modal' : 'card')
	}
};

export default createStackNavigator(
	{
		Main: MainScreen
	},
	routeConfig
);
