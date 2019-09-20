import React from 'react';
import RootScreen from './containers/Root/RootScreen';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
import configureStore from './redux/store/configureStore';

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
