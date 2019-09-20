import NavigationService from '@services/NavigationService';
import { View } from 'native-base';
import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import StartupActions from '../../redux/actions/startupActions';
import RootNavigator from './RootNavigator';
import styles from './RootScreenStyle';

const AppContainer = createAppContainer(RootNavigator);

class RootScreen extends Component {
	constructor() {
		super();
		this.unsubscriber = null;
		this.state = {
			user: null
		};
	}

	componentDidMount() {
		// Executa startup saga quando aplicacao inicia
		this.props.startup();

		// listener Auth firebase
		this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
			this.setState({ user });
		});

		setInterval(() => {
			this.setState({
				spinner: !this.state.spinner
			});
		}, 3000);
	}

	componentWillUnmount() {
		if (this.unsubscriber) {
			this.unsubscriber();
		}
	}

	render() {
		const { loading } = this.props;

		return (
			<SafeAreaView style={styles.safeAreaView}>
				<View style={styles.container}>
					<Spinner
						visible={loading}
						animation={'fade'}
						// textContent={'Carregando...'}
						textStyle={{ color: '#FFF' }}
					/>
					<AppContainer
						ref={navigatorRef => {
							NavigationService.setTopLevelNavigator(navigatorRef);
						}}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = ({ api }) => ({ loading: api.loading });

const mapDispatchToProps = dispatch => ({
	startup: () => dispatch(StartupActions.startup())
	// loadUser: user => dispatch(AuthActions.loadUser(user))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RootScreen);
