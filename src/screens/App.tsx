import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store/index';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import { Home } from './Home';
import { Test } from './Test';
import { Listen } from './Listen';
import { Highlights } from './Highlights';

export const App = (): React.ReactElement => {
  const Stack = createStackNavigator();

  return (
    <>
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Test" component={Test} />
                <Stack.Screen name="Listen" component={Listen} />
                <Stack.Screen name="Highlights" component={Highlights} />
              </Stack.Navigator>
            </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    </>
  );
}
