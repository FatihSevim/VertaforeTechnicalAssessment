import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store/index';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import './global.css';

import List from './pages/List';
import Add from './pages/Add';
import Update from './pages/Update';

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="Update" component={Update} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
