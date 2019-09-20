import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './redux/store/configureStore';
import RootScreen from './containers/Root/RootScreen';
import SplashScreen from './containers/SplashScreen/SplashScreen';
import rootSaga from './redux/sagas';
import rootReducer from './redux/reducers';

const { store, persistor } = configureStore(rootReducer, rootSaga);

// Debug Only - yellow box
console.disableYellowBox = true;

export default function App() {
	return (
		<>
			<RootScreen />
		</>
	);
}
