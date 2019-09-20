import DadosContaScreen from '@containers/CadastroScreen/DadosContaScreen';
import FimCadastroScreen from '@containers/CadastroScreen/FimCadastroScreen';
import LoginScreen from '@containers/LoginScreen/LoginScreen';
import SplashScreen from '@containers/SplashScreen/SplashScreen';
import WelcomeScreen from '@containers/WelcomeScreen/WelcomeScreen';
import Colors from '@theme/Colors';
import { Platform, Animated, Easing } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

const routeConfig = {
	headerMode: 'none',
	initialRouteName: 'Logged',
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
		headerTintColor: Colors.headerTintColor,
		/*
		 * Use modal on iOS because the card mode comes from the right,
		 * which conflicts with the drawer example gesture
		 */
		mode: (Platform.OS = index == 'ios' ? 'modal' : 'card')
	},
	transitionConfig: () => ({
		transitionSpec: {
			duration: 300,
			easing: Easing.out(Easing.poly(4)),
			timing: Animated.timing
		},
		screenInterpolator: sceneProps => {
			const { layout, position, scene } = sceneProps;
			const { index } = scene;

			const height = layout.initHeight;
			const translateY = position.interpolate({
				inputRange: [index - 1, index, index + 1],
				outputRange: [height, 0, 0]
			});

			const opacity = position.interpolate({
				inputRange: [index - 1, index - 0.99, index],
				outputRange: [0, 1, 1]
			});

			return { opacity, transform: [{ translateY }] };
		}
	})
};

/**
 * Fluxo de telas quando usuário nao está logado
 */
const UnloggedFlow = createStackNavigator(
	{
		WelcomeScreen: WelcomeScreen,
		LoginScreen: LoginScreen,
		DadosContaScreen: DadosContaScreen,
		FimCadastroScreen: FimCadastroScreen
	},
	{ headerMode: 'none' }
);

/**
 * Fluxo de telas quando encontrado profissional disponivel
 */
// const ModaisFlow = createStackNavigator(
// 	{ EncontramosModal: EncontramosModal },
// 	{
// 		mode: 'modal',
// 		headerMode: 'none',
// 		transparentCard: true,
// 		cardStyle: {
// 			backgroundColor: Colors.overlay,
// 			opacity: 1
// 		}
// 	}
// );

export default createStackNavigator(
	{
		SplashScreen: SplashScreen,
		Unlogged: UnloggedFlow,
		Logged: DrawerNavigator
	},
	routeConfig
);
